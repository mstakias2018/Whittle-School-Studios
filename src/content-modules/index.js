import React, { PropTypes, } from 'react';

import BodyText from './global/body-text';

const MODULE_MAP = {
  ContentfulBodyText: BodyText,
};

const propTypes = {
  modules: PropTypes.any,
};

export default function ContentModules({ modules, }) {
  return (
    <div>
      {modules.map(({ __typename: type, ...props }, i) => {
        const Component = MODULE_MAP[type];
        return <Component key={i} {...props} />;
      })}
    </div>
  );
}

ContentModules.propTypes = propTypes;
