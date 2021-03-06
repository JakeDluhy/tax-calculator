module.exports = {
    parser: 'babel-eslint',
    env: {
        'node': true,
        'es6': true
    },
    extends: 'eslint:recommended',
    rules: {
        'indent': [ 'error', 2 ],
        'linebreak-style': [ 'error', 'unix' ],
        'quotes': [ 'error', 'single' ],
        'semi': [ 'error', 'always' ]
    }
};
