import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import { ENV } from '../src/constants/env';
import { REGION } from '../src/constants/regions';

process.env.GATSBY_ENV = ENV.DEV;
process.env.GATSBY_REGION = REGION.CHINA;

Enzyme.configure({ adapter: new Adapter() });

global.graphql = () => {};
