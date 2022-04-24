module.exports = {
    env: {
        browser: true,
        jest: true,
        node: true,
    },
    extends: [
        require.resolve('@janziemba/eslint-config-base'),
        require.resolve('@janziemba/eslint-config-next'),
        require.resolve('@janziemba/eslint-config-react'),
        require.resolve('@janziemba/eslint-config-typescript'),
    ],
    ignorePatterns: ['node_modules'],
    parser: '@typescript-eslint/parser',
    rules: {
        '@next/next/no-img-element': 0, // Photoswipe
        'jsx-a11y/alt-text': 0,
        'jsx-a11y/click-events-have-key-events': 0, // Photoswipe
        'jsx-a11y/no-noninteractive-element-interactions': 0, // Photoswipe
        'react/forbid-component-props': 0, // Next
    },
};
