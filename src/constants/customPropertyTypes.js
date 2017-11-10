import PropTypes from 'prop-types';

import { PAGE_TYPES } from './settings';

exports.PROP_TYPES = {
  IMAGE_SET: PropTypes.shape({
    SMALL: PropTypes.string,
    MEDIUM: PropTypes.string,
    LARGE: PropTypes.string,
  }),
  PAGE_TYPES: PropTypes.oneOf(PAGE_TYPES),
};
