const path = require('path');

const { STRUCTURAL_COMPONENTS } = require('../src/constants/contentful');
const {
  LANGUAGE_CONTENTFUL_LOCALE,
  LANGUAGE_PATH,
  REGION_LANGUAGES,
} = require('../src/constants/regions');
const { IMAGE_TYPE, IMAGE_SUBTYPE } = require('../src/constants/images');
const {
  createQuery,
  saveImage,
} = require('./save-images');

const createHomePages = (graphql, createPage) =>
  REGION_LANGUAGES[process.env.GATSBY_REGION].map(language =>
    new Promise((resolve, reject) => {
      const locale = LANGUAGE_CONTENTFUL_LOCALE[language];

      graphql(`
          {
            allContentfulHomePage(
              filter: { node_locale: { eq: "${locale}" } }
            ) {
              edges {
                node {
                  dummycontentindex {
                    id
                  }
                  id: contentful_id
                  hero {
                    image {
                      ${createQuery(IMAGE_SUBTYPE.HERO)}
                    }
                    videos {
                      video1AssetCoverPhoto {
                        ${createQuery(IMAGE_SUBTYPE.INLINE_RT_HERO_VIDEO)}
                      }
                      video2AssetCoverPhoto {
                        ${createQuery(IMAGE_SUBTYPE.INLINE_RT_HERO_VIDEO_SMALL)}
                      }
                      video3AssetCoverPhoto {
                        ${createQuery(IMAGE_SUBTYPE.INLINE_RT_HERO_VIDEO_SMALL)}
                      }
                    }
                  }
                  campusModule {
                    imageSq: image {
                        ${createQuery(IMAGE_SUBTYPE.CAMPUS)}
                    }
                    imageRt: image {
                      ${createQuery(IMAGE_SUBTYPE.CAMPUS_VIDEO)}
                    }
                    videoEmbedCode {
                      id
                    }
                    architectImage {
                      ${createQuery(IMAGE_SUBTYPE.CAMPUS_ARCHITECT)}
                    }
                  }
                  teamsModule {
                    heroImage {
                      ${createQuery(IMAGE_SUBTYPE.TEAMS_HERO_SQ)}
                    }
                    sections {
                      person1Image {
                        ${createQuery(IMAGE_SUBTYPE.TEAMS_BIO_SQ)}
                      }
                      person2Image {
                        ${createQuery(IMAGE_SUBTYPE.TEAMS_BIO_SQ)}
                      }
                      person3Image {
                        ${createQuery(IMAGE_SUBTYPE.TEAMS_BIO_SQ)}
                      }
                      person4Image {
                        ${createQuery(IMAGE_SUBTYPE.TEAMS_BIO_SQ)}
                      }
                      person5Image {
                        ${createQuery(IMAGE_SUBTYPE.TEAMS_BIO_SQ)}
                      }
                      person6Image {
                        ${createQuery(IMAGE_SUBTYPE.TEAMS_BIO_SQ)}
                      }
                    }
                  }
                }
              }
            }
          }
        `).then((result) => {
        if (result.errors) {
          console.log(result.errors); // eslint-disable-line no-console
          reject(result.errors);
        }

        const homePageTemplate = path.resolve('./src/templates/home-page/index.js');

        const buildPage = (id, imageDataByType) => {
          const context = {
            id,
            imageDataByType,
            locale,
          };
          createPage({
            component: homePageTemplate,
            context,
            path: LANGUAGE_PATH[language],
          });
        };

        const modulePromises = [];
        const imageDataByType = {};

        let homepage;
        result.data.allContentfulHomePage.edges.some(({ node }) => {
          if (!node.dummycontentindex) {
            homepage = node;
            return true;
          }
          return false;
        });

        const {
          id, campusModule, teamsModule, hero
        } = homepage;

        if (hero) {
          imageDataByType[STRUCTURAL_COMPONENTS.HOME_HERO] = {};

          if (hero.image) {
            const heroImage = saveImage(
              hero.image,
              IMAGE_TYPE.MODULE,
              IMAGE_SUBTYPE.HERO,
              [id, STRUCTURAL_COMPONENTS.HOME_HERO]
            );
            if (heroImage) {
              modulePromises.push(heroImage.then((imageData) => {
                imageDataByType[STRUCTURAL_COMPONENTS.HOME_HERO].image = imageData;
              }));
            }
          }

          if (hero.videos) {
            [
              hero.videos.video1AssetCoverPhoto,
              hero.videos.video2AssetCoverPhoto,
              hero.videos.video3AssetCoverPhoto,
            ].forEach((asset, j) => {
              if (asset) {
                const videoImage = saveImage(
                  asset,
                  IMAGE_TYPE.MODULE,
                  j === 0 ? IMAGE_SUBTYPE.INLINE_RT_HERO_VIDEO : IMAGE_SUBTYPE.INLINE_RT_HERO_VIDEO_SMALL,
                  [id, STRUCTURAL_COMPONENTS.HOME_HERO, j]
                );

                if (videoImage) {
                  modulePromises.push(videoImage.then((imageData) => {
                    imageDataByType[STRUCTURAL_COMPONENTS.HOME_HERO][`video${j + 1}AssetCoverPhoto`] = imageData;
                  }));
                }
              }
            });
          }
        }

        if (campusModule) {
          imageDataByType[STRUCTURAL_COMPONENTS.HOME_CAMPUSES] = {};

          if (campusModule.imageSq && campusModule.imageRt) {
            const campusImage = saveImage(
              campusModule.videoEmbedCode ? campusModule.imageRt : campusModule.imageSq,
              IMAGE_TYPE.MODULE,
              campusModule.videoEmbedCode ? IMAGE_SUBTYPE.CAMPUS_VIDEO : IMAGE_SUBTYPE.CAMPUS,
              [id, STRUCTURAL_COMPONENTS.HOME_CAMPUSES, 'campus']
            );
            if (campusImage) {
              modulePromises.push(campusImage.then((imageData) => {
                imageDataByType[STRUCTURAL_COMPONENTS.HOME_CAMPUSES].image = imageData;
              }));
            }
          }

          if (campusModule.architectImage) {
            const architectImage = saveImage(
              campusModule.architectImage,
              IMAGE_TYPE.MODULE,
              IMAGE_SUBTYPE.CAMPUS_ARCHITECT,
              [id, STRUCTURAL_COMPONENTS.HOME_CAMPUSES, 'architect']
            );
            if (architectImage) {
              modulePromises.push(architectImage.then((imageData) => {
                imageDataByType[STRUCTURAL_COMPONENTS.HOME_CAMPUSES].architectImage = imageData;
              }));
            }
          }
        }

        if (teamsModule) {
          imageDataByType[STRUCTURAL_COMPONENTS.HOME_TEAMS] = {};
          if (teamsModule.heroImage) {
            const heroImage = saveImage(
              teamsModule.heroImage,
              IMAGE_TYPE.MODULE,
              IMAGE_SUBTYPE.TEAMS_HERO_SQ,
              [id, STRUCTURAL_COMPONENTS.HOME_TEAMS]
            );
            if (heroImage) {
              modulePromises.push(heroImage.then((imageData) => {
                imageDataByType[STRUCTURAL_COMPONENTS.HOME_TEAMS].heroImage = imageData;
              }));
            }
          }
          if (teamsModule.sections) {
            for (let i = 0; i < 5; i += 1) {
              if (teamsModule.sections[i]) {
                for (let j = 1; j <= 6; j += 1) {
                  if (teamsModule.sections[i][`person${j}Image`]) {
                    const personImage = saveImage(
                      teamsModule.sections[i][`person${j}Image`],
                      IMAGE_TYPE.MODULE,
                      IMAGE_SUBTYPE.TEAMS_BIO_SQ,
                      [id, STRUCTURAL_COMPONENTS.HOME_TEAMS, i, j]
                    );
                    modulePromises.push(personImage.then((imageData) => {
                      imageDataByType[STRUCTURAL_COMPONENTS.HOME_TEAMS][`personImage${i}${j}`] = imageData;
                    }));
                  }
                }
              }
            }
          }
        }

        return Promise.all(modulePromises).then(() => buildPage(id, imageDataByType)).then(resolve);
      });
    }));

module.exports = createHomePages;
