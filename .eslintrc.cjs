module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "standard-with-typescript",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "ignorePatterns": [".eslintrc.*", "node_modules/", "dist/", "vite.config.ts", "commitlint.config.cjs"],
    "plugins": ["simple-import-sort"],
    "rules": {
        "simple-import-sort/imports": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/space-before-function-paren": "off",
    }
}
