/* eslint-disable no-console */
import simpleGit from 'simple-git';

import transferSpaces from './transfer-spaces';

import { ENV } from '../src/constants/env';
import { REGION } from '../src/constants/regions';

transferSpaces(
  [ENV.QA, REGION.CHINA],
  [ENV.QA, REGION.US],
  true,
).then(() => {
  transferSpaces(
    [ENV.QA, REGION.US],
    [ENV.PROD, REGION.US],
  ).then(() => {
    transferSpaces(
      [ENV.QA, REGION.CHINA],
      [ENV.PROD, REGION.CHINA],
    ).then(() => {
      console.log('=== PUSHING TO STAGING/PROD BRANCHES');
      simpleGit()
        .fetch()
        .push(['-f', 'origin', 'refs/remotes/origin/master:refs/heads/staging'])
        .push(['-f', 'origin', 'refs/remotes/origin/master:refs/heads/production']);
    });
  });
});