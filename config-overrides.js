const { override } = require('customize-cra');

module.exports = override(
    (config) => {

        const babelIndex = config.module.rules.findIndex(
            (rule) => rule && rule.use && Array.isArray(rule.use)
        );
        if (babelIndex !== -1) {
            const babelLoader = config.module.rules[babelIndex].use.find(
                (use) => use && use.loader && use.loader.includes('babel-loader')
            );
            if (babelLoader) {
                babelLoader.options.plugins.push(
                    '@babel/plugin-proposal-private-property-in-object'
                );
            }
        }
        return config;
    }
);
