import { MAIN_IMAGE_TYPE } from '../../constants/images';

const adaptContentPageProps = ({ data: { contentfulContentPage }, pathContext: { imageDataByType } }) => {
  const {
    headline, mainImage, modules, pageType,
  } = contentfulContentPage;

  let imageProps;

  if (mainImage) {
    const { title: alt } = mainImage;
    const mainImageType = MAIN_IMAGE_TYPE[pageType];
    const sourcesBySize = imageDataByType[mainImageType];

    imageProps = {
      alt,
      sourcesBySize,
    };
  }

  return {
    headline,
    imageProps,
    modules,
    pageType,
  };
};

export default adaptContentPageProps;
