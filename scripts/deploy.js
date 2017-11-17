/* eslint-disable no-console */
import simpleGit from 'simple-git';

import transferSpaces from './transfer-spaces';

// TODO ENV VARS
const CHINA_DEV = 'udx5f2jyw09i';
const US_DEV = 'oddfnk02van2';

const CHINA_QA = '5wvb725fovi7';
const US_QA = 'w6h2a8mys1um';

console.log('=== COPYING CHINA DEV TO US DEV');
transferSpaces(CHINA_DEV, US_DEV, true).then(() => {
  console.log('=== COPYING US DEV TO US QA');
  transferSpaces(US_DEV, US_QA).then(() => {
    console.log('=== COPYING CHINA DEV TO CHINA QA');
    transferSpaces(CHINA_DEV, CHINA_QA).then(() => {
      console.log('=== PUSHING TO QA BRANCH');
      simpleGit().fetch().push('origin', 'refs/remotes/origin/master:refs/heads/qa');
    });
  });
});
