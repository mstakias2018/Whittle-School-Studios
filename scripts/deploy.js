import { exec } from 'child_process';

import transferSpaces from './transfer-spaces';

// TODO ENV VARS
const CHINA_DEV = 'udx5f2jyw09i';
const US_DEV = 'oddfnk02van2';

const CHINA_QA = '5wvb725fovi7';
const US_QA = 'w6h2a8mys1um';

transferSpaces(CHINA_DEV, CHINA_QA);
transferSpaces(US_DEV, US_QA);

exec('git push origin master:qa');
