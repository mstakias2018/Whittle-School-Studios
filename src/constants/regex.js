/* eslint-disable max-len */
/* eslint-disable no-control-regex */
/* eslint-disable no-useless-escape */

const UTF8_REGEX = '[\x00-\x7F]|([\xC2-\xDF]|\xE0[\xA0-\xBF]|\xED[\x80-\x9F]|(|[\xE1-\xEC]|[\xEE-\xEF]|\xF0[\x90-\xBF]|\xF4[\x80-\x8F]|[\xF1-\xF3][\x80-\xBF])[\x80-\xBF])[\x80-\xBF]';

exports.NON_UTF8_REGEX = new RegExp(`[^\w\s${UTF8_REGEX}]`, 'ig');
