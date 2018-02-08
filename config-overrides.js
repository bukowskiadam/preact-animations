/* eslint-disable no-param-reassign,dot-notation */
module.exports = function override(config) {
    config.resolve.alias['react'] = 'preact-compat';
    config.resolve.alias['react-dom'] = 'preact-compat';

    return config;
};
