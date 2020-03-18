/* eslint-disable */
module.exports = {
    root: true,
    extends: [
        'stylelint-config-standard',
        'stylelint-config-rational-order',
    ],
    rules: {
        'at-rule-no-unknown': [true, {
            'ignoreAtRules': ['function', 'if', 'each', 'include', 'mixin']
        }],
        'indentation': 4,
        'max-empty-lines': 2,
    }
};
