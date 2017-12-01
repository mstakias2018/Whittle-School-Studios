/* eslint-disable no-console */
import simpleGit from 'simple-git';

import transferSpaces from './transfer-spaces';

import { ENV } from '../src/constants/env';
import { REGION } from '../src/constants/regions';

transferSpaces(
  [ENV.DEV, REGION.CHINA],
  [ENV.DEV, REGION.US],
  true,
).then(() => {
  transferSpaces(
    [ENV.DEV, REGION.US],
    [ENV.QA, REGION.US],
  ).then(() => {
    transferSpaces(
      [ENV.DEV, REGION.CHINA],
      [ENV.QA, REGION.CHINA],
    ).then(() => {
      console.log('=== PUSHING TO QA BRANCH');
      simpleGit()
        .fetch()
        .push(['-f', 'origin', 'refs/remotes/origin/master:refs/heads/qa']);
    });
  });
});
