import * as pkg from './package.json';

module.exports = ({ config }) => {
  return { version: pkg.version, ...config };
};
