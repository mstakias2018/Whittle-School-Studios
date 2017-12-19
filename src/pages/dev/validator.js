import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { CONTENTFUL_SPACE, CONTENT_MODULE } from '../../constants/contentful';
import { ENV } from '../../constants/env';
import { PAGE_TYPE } from '../../constants/settings';

import styles from './validator.module.css';

const propTypes = {
  data: PropTypes.shape({
    allContentfulContentPage: PropTypes.object.isRequired,
  }).isRequired,
};

const CONTENT_PAGE_RULES = {
  list: [
    {
      text: 'Pages must have one or more modules',
      validator: ({ modules }) => modules && modules.length >= 1,
    },
    {
      text: 'First module must be BodyText or OpenApplyIFrame',
      validator: ({ modules }) => {
        const firstModule = modules && modules[0];
        if (!firstModule) return false;
        return firstModule.type === CONTENT_MODULE.BODY_TEXT ||
          firstModule.type === CONTENT_MODULE.OPENAPPLY_IFRAME;
      },
    },
  ],
  title: 'content page',
};

const ARTICLE_RULES = {
  list: [
    {
      text: 'Articles must not have subcategories',
      validator: ({ subcategories }) => !(subcategories && subcategories.length),
    },
  ],
  title: 'article',
};

const CATEGORY_RULES = {
  list: [
    {
      text: `Categories with subcategories must have Nav Title, Nav Description,
             and Overview Nav Title values`,
      validator: ({
        overviewNavTitle,
        navDescription,
        navTitle,
        subcategories,
      }) =>
        !(subcategories && !(overviewNavTitle && navDescription && navTitle)),
    },
    {
      text: 'Categories in header must have Nav Title value',
      validator: ({ header, navTitle }) => !(header && !navTitle),
    },
  ],
  title: 'category',
};

const PAGE_TYPE_RULES = {
  [PAGE_TYPE.ARTICLE]: ARTICLE_RULES,
  [PAGE_TYPE.CATEGORY]: CATEGORY_RULES,
};

const SUBCATEGORY_RULES = {
  list: [
    {
      text: 'Subcategories must have Nav Title and Nav Description values',
      validator: ({ navTitle, navDescription }) => navTitle && navDescription,
    },
  ],
  title: 'subcategory',
};

const sortByValidity = (r1, r2) => (r1.isValid > r2.isValid ? 1 : -1);

class Validator extends Component {
  state = {
    shouldHidePassing: true,
    validatedPages: this.getValidatedPages(),
  }

  getValidatedPages() {
    const { data: { allContentfulContentPage: { contentPages } } } = this.props;
    const shouldHidePassing = this.state ? this.state.shouldHidePassing : true;

    return contentPages
      .reduce((pageRuleList, { node }) => {
        let isPageValid = true;

        const ruleGroups = [CONTENT_PAGE_RULES, PAGE_TYPE_RULES[node.pageType]];
        if (node.parentCategory) ruleGroups.push(SUBCATEGORY_RULES);

        const ruleValidations = ruleGroups
          .reduce((ruleGroupList, ruleGroup) => {
            if (!ruleGroup) return ruleGroupList;

            const { title, list } = ruleGroup;
            let isRuleGroupValid = true;

            const validatedList = list
              .reduce((ruleList, { text, validator }) => {
                const isRuleValid = validator(node);
                isRuleGroupValid = isRuleGroupValid && isRuleValid;
                isPageValid = isPageValid && isRuleValid;

                if (!isRuleValid || !shouldHidePassing) {
                  ruleList.push({
                    isValid: isRuleValid,
                    text,
                  });
                }

                return ruleList;
              }, [])
              .sort(sortByValidity);

            if (!isRuleGroupValid || !shouldHidePassing) {
              ruleGroupList.push({
                isValid: isRuleGroupValid,
                list: validatedList,
                title,
              });
            }

            return ruleGroupList;
          }, [])
          .sort(sortByValidity);

        if (!isPageValid || !shouldHidePassing) {
          pageRuleList.push({
            isValid: isPageValid,
            locale: node.locale,
            ruleValidations,
            slug: node.slug,
          });
        }

        return pageRuleList;
      }, [])
      .sort((p1, p2) => {
        if (p1.isValid && !p2.isValid) return 1;
        if (p2.isValid && p2.isValid) return -1;
        return p1.slug > p2.slug ? 1 : -1;
      });
  }

  toggleShouldHidePassing = () => {
    this.setState({
      shouldHidePassing: !this.state.shouldHidePassing,
    }, () => this.setState({
      validatedPages: this.getValidatedPages(),
    }));
  }

  render() {
    const { shouldHidePassing, validatedPages } = this.state;

    return (
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Content validator
          </h1>
          <ul className={styles.headerData}>
            <li className={styles.headerDataItem}>
              <strong>Last build: </strong>
              {process.env.GATSBY_BUILD_TIME}
            </li>
            <li className={styles.headerDataItem}>
              <strong>Last commit: </strong>
              {process.env.GATSBY_COMMIT_REF && process.env.GATSBY_COMMIT_REF.slice(0, 7)}
            </li>
            <li className={styles.headerDataItem}>
              <strong>Contentful space: </strong>
              {CONTENTFUL_SPACE[process.env.GATSBY_ENV][process.env.GATSBY_REGION].spaceName}
            </li>
            <li className={styles.headerDataItem}>
              <strong>Using Preview API: </strong>
              {process.env.GATSBY_ENV === ENV.STAGING ? 'Yes' : 'No'}
            </li>
            <li className={styles.headerDataItem}>
              <button
                className={styles.headerButton}
                onClick={this.toggleShouldHidePassing}
              >
                {shouldHidePassing ? 'Show' : 'Hide'} passing validations
              </button>
            </li>
          </ul>
        </header>
        <ul className={styles.pageList}>
          {validatedPages.map(({ locale, ruleValidations, slug }, i) => (
            <li
              className={styles.page}
              key={i}
            >
              <div className={styles.pageHeader}>
                <strong>{slug}</strong>
                <span>{locale}</span>
              </div>
              <ul className={styles.ruleGroupList}>
                {ruleValidations
                  .map(({ title, list }, j) => (
                    <li key={j}>
                      <div className={styles.ruleGroupTitle}>{title}</div>
                      <ul className={styles.ruleList}>
                        {list.map(({ text, isValid }, k) => (
                          <li key={k}>
                            <strong
                              className={cx(styles.ruleStatus, {
                                [styles.ruleStatus_isValid]: isValid,
                              })}
                            >
                              {isValid ? '✓' : '✗'}
                            </strong>
                            {text}
                          </li>
                        ))}
                      </ul>
                    </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Validator.propTypes = propTypes;

export default Validator;

export const pageQuery = graphql`
  query validatorQuery {
    allContentfulContentPage {
      contentPages: edges {
        node {
          header {
            id: contentful_id
          }
          locale: node_locale
          modules {
            type: __typename
          }
          overviewNavTitle
          navTitle
          navDescription
          pageType
          parentCategory: contentpage {
            id: contentful_id
          }
          subcategories {
            id: contentful_id
          }
          slug
        }
      }
    }
  }
`;
