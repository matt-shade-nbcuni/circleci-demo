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
    "rules": {
        "comma-dangle": [2, "never"],
        "object-curly-spacing": [2, "never"],
        "object-shorthand": [2, "always"],
        "array-bracket-spacing": [2, "never"],
        "max-len": [2, 120, {
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true,
            "ignoreComments": true,
        }],
        "consistent-return": 0,
    }
};
