import * as pkg from './package.json';

module.exports = ({ config }) => {
  return { ...config, version: pkg.version };
};
