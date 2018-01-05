/* eslint-disable no-console */
import simpleGit from 'simple-git';

import transferSpaces from './transfer-spaces';

import { ENV } from '../src/constants/env';
import { REGION } from '../src/constants/regions';

transferSpaces(
  [ENV.QA, REGION.CHINA],
  [ENV.QA, REGION.US],
  { shouldFilterNonEnglish: true, shouldSkipContent: true }
).then(() => {
  transferSpaces(
    [ENV.QA, REGION.US],
    [ENV.PRODUCTION, REGION.US],
    { shouldSkipContent: true }
  ).then(() => {
    transferSpaces(
      [ENV.QA, REGION.CHINA],
      [ENV.PRODUCTION, REGION.CHINA],
      { shouldSkipContent: true }
    ).then(() => {
      console.log('=== PUSHING TO STAGING/PROD BRANCHES');
      simpleGit()
        .fetch()
        .push(['-f', 'origin', 'refs/remotes/origin/qa:refs/heads/staging'])
        .push(['-f', 'origin', 'refs/remotes/origin/qa:refs/heads/production']);
    });
  });
});
