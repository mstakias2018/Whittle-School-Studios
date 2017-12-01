const BRANCHES = {
  QA: 'qa',
  STAGING: 'staging',
  PRODUCTION: 'production',
};

exports.BRANCHES = BRANCHES;

const ENV = {
  DEV: 'DEV',
  QA: 'QA',
  STAGING: 'STAGING',
  PRODUCTION: 'PRODUCTION',
};

exports.ENV = ENV;

exports.BRANCH_ENV_MAP = {
  [BRANCHES.QA]: ENV.QA,
  [BRANCHES.STAGING]: ENV.STAGING,
  [BRANCHES.PRODUCTION]: ENV.PRODUCTION,
};
