module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "globals": {
        "process": "writable",
        "var2": "readonly"
    },
    "rules": {
        "react/no-unescaped-entities": 0,
        "block-spacing": ["error", "always"],
        "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
        "camelcase": ["error", { "properties": "never" }],
        "comma-dangle": ["error", {
          "arrays": "never",
          "objects": "never",
          "imports": "never",
          "exports": "never",
          "functions": "never"
        }],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "comma-style": ["error", "last"],
    }
};
