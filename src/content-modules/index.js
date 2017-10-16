import React, {PropTypes} from 'react';

import BodyText from './body-text';
import InlineVideo from './inline-video';

const MODULE_MAP = {
  ContentfulBodyText: BodyText,
  ContentfulInlineVideo: InlineVideo
};

const propTypes = {
  modules: PropTypes.any
};

export default function ContentModules({modules}) {
  console.log('---', modules);
  return (
    <div>
      {modules.map(({['__typename']: type, ...props}, i) => {
        const Component = MODULE_MAP[type];
        return <Component key={i} {...props} />;
      })}
    </div>
  );
}

ContentModules.propTypes = propTypes;
