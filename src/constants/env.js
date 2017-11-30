const BRANCHES = {
  QA: 'qa',
  STAGING: 'staging',
};

exports.BRANCHES = BRANCHES;

const ENV = {
  DEV: 'DEV',
  QA: 'QA',
  STAGING: 'QA',
};

exports.ENV = ENV;

exports.BRANCH_ENV_MAP = {
  [BRANCHES.QA]: ENV.QA,
  [BRANCHES.STAGING]: ENV.STAGING,
};
