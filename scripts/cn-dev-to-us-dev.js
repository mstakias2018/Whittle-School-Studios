import { ENV } from '../src/constants/env';
import { REGION } from '../src/constants/regions';
import transferSpaces from './transfer-spaces';

transferSpaces(
  [ENV.DEV, REGION.CHINA],
  [ENV.DEV, REGION.US],
  { shouldFilterNonEnglish: true },
);
