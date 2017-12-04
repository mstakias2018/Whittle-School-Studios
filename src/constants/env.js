const BRANCHES = {
  PRODUCTION: 'production',
  QA: 'qa',
  STAGING: 'staging',
};

exports.BRANCHES = BRANCHES;

const ENV = {
  DEV: 'DEV',
  PRODUCTION: 'PRODUCTION',
  QA: 'QA',
  STAGING: 'STAGING',
};

exports.ENV = ENV;

exports.BRANCH_ENV_MAP = {
  [BRANCHES.QA]: ENV.QA,
  [BRANCHES.STAGING]: ENV.STAGING,
  [BRANCHES.PRODUCTION]: ENV.PRODUCTION,
};
