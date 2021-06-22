module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": './tsconfig.json',
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
      '@typescript-eslint/explicit-module-boundary-types': 2,
      '@typescript-eslint/no-unsafe-assignment': 1,
      '@typescript-eslint/no-unsafe-call': 1,
      '@typescript-eslint/no-unsafe-member-access': 1,
      '@typescript-eslint/no-unsafe-return' : 1,
      '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }]
    }
};
