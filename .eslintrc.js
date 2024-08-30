/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint. 
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
        "prettier/@typescript-eslint"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "eslint-plugin-import",
        "eslint-plugin-no-null",
        "eslint-plugin-jsdoc",
        "eslint-plugin-security",
        "eslint-plugin-prefer-arrow",
        "eslint-plugin-unicorn",
        "eslint-plugin-jest",
        "jsx-a11y",
        "eslint-plugin-react",
        "eslint-plugin-lodash",
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "rules": {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": [
            "error",
            {
                "default": "generic"
            }
        ],
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-ts-comment": "error",
        "@typescript-eslint/ban-types": [
            "error",
            {
                "types": {
                    "Object": {
                        "message": "Use {} instead."
                    },
                    "Function": {
                        "message": "Avoid using the `Function` type. Prefer a specific function type"
                    }
                }
            }
        ],
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "explicit"
            }
        ],
        "@typescript-eslint/member-delimiter-style": "error",
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/naming-convention": "error",
        "@typescript-eslint/no-array-constructor": "off",
        "@typescript-eslint/no-dynamic-delete": "error",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-extraneous-class": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-inferrable-types": [
            "error",
            {
                "ignoreParameters": true
            }
        ],
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-require-imports": "off",
        "@typescript-eslint/no-shadow": [
            "error",
            {
                "hoist": "all"
            }
        ],
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/prefer-readonly": "error",
        "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/quotes": [
            "error",
            "single",
            "double",
            {
                "avoidEscape": true
            }
        ],
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/triple-slash-reference": [
            "error",
            {
                "path": "always",
                "types": "prefer-import",
                "lib": "always"
            }
        ],
        "@typescript-eslint/unbound-method": "error",
        "@typescript-eslint/unified-signatures": "off",
        "arrow-body-style": "error",
        "arrow-parens": [
            "off",
            "always"
        ],
        "brace-style": [
            "error",
            "1tbs"
        ],
        "complexity": "off",
        "constructor-super": "error",
        "curly": "error",
        "dot-notation": "off",
        "eqeqeq": [
            "error",
            "always"
        ],
        "guard-for-in": "error",
        "id-blacklist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined"
        ],
        "id-match": "error",
        "import/no-default-export": "off",
        "import/no-deprecated": "warn",
        "import/no-internal-modules": "off",
        "import/order": "error",
        "jest/no-focused-tests": "error",
        "jsdoc/check-alignment": "error",
        "jsdoc/check-indentation": "error",
        "jsdoc/newline-after-description": "error",
        "jsdoc/no-types": "error",
        "jsx-a11y/alt-text": "error",
        "jsx-a11y/anchor-is-valid": "error",
        "jsx-a11y/aria-props": "error",
        "jsx-a11y/aria-proptypes": "error",
        "jsx-a11y/aria-role": "error",
        "jsx-a11y/lang": "error",
        "jsx-a11y/no-static-element-interactions": "error",
        "jsx-a11y/role-has-required-aria-props": "error",
        "jsx-a11y/role-supports-aria-props": "error",
        "jsx-a11y/tabindex-no-positive": "error",
        "lodash/chaining": [
            "error",
            "never"
        ],
        "max-classes-per-file": "off",
        "max-len": [
            "error",
            {
                "ignorePattern": "^import |^export {(.*?)}"
            }
        ],
        "max-statements": "error",
        "new-parens": "error",
        "newline-per-chained-call": "off",
        "no-array-constructor": "off",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-console": [
            "error",
            {
                "allow": [
                    "warn",
                    "dir",
                    "time",
                    "timeEnd",
                    "timeLog",
                    "trace",
                    "assert",
                    "clear",
                    "count",
                    "countReset",
                    "group",
                    "groupEnd",
                    "table",
                    "debug",
                    "info",
                    "dirxml",
                    "error",
                    "groupCollapsed",
                    "Console",
                    "profile",
                    "profileEnd",
                    "timeStamp",
                    "context"
                ]
            }
        ],
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-empty": "error",
        "no-empty-function": "error",
        "no-eval": "error",
        "no-extra-bind": "error",
        "no-extra-semi": "error",
        "no-fallthrough": "error",
        "no-invalid-regexp": "error",
        "no-invalid-this": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-null/no-null": "off",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-plusplus": [
            "error",
            {
                "allowForLoopAfterthoughts": true
            }
        ],
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-restricted-imports": [
            "error",
            "rxjs/Rx"
        ],
        "no-restricted-syntax": [
            "off",
            {
                "message": "Forbidden call to document.cookie",
                "selector": "MemberExpression[object.name=\"document\"][property.name=\"cookie\"]"
            }
        ],
        "no-return-await": "error",
        "no-sequences": "error",
        "no-shadow": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "error",
        "no-unsafe-finally": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-use-before-define": "off",
        "no-useless-constructor": "error",
        "no-var": "error",
        "no-void": "error",
        "no-warning-comments": [
            "off",
            {
                "location": "anywhere",
                "terms": [
                    "BUG",
                    "HACK",
                    "FIXME",
                    "LATER",
                    "LATER2",
                    "TODO"
                ]
            }
        ],
        "no-with": "error",
        "object-shorthand": "error",
        "one-var": [
            "error",
            "never"
        ],
        "prefer-arrow/prefer-arrow-functions": "off",
        "prefer-const": "error",
        "prefer-object-spread": "error",
        "prefer-template": "error",
        "quote-props": [
            "error",
            "as-needed"
        ],
        "quotes": "error",
        "radix": "error",
        "react/no-danger": "error",
        "security/detect-non-literal-fs-filename": "off",
        "security/detect-non-literal-require": "error",
        "security/detect-possible-timing-attacks": "off",
        "space-before-function-paren": "off",
        "space-in-parens": [
            "off",
            "never"
        ],
        "spaced-comment": [
            "error",
            "always",
            {
                "markers": [
                    "/"
                ]
            }
        ],
        "unicorn/prefer-ternary": "error",
        "use-isnan": "error",
        "valid-typeof": "off",
        "yoda": "error",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "chai-prefer-contains-to-index-of": true,
                    "chai-vague-errors": true,
                    "comment-type": [
                        true,
                        "singleline",
                        "multiline",
                        "doc",
                        "directive"
                    ],
                    "defocus": true,
                    "encoding": true,
                    "informative-docs": true,
                    "jquery-deferred-must-complete": true,
                    "lines-between-class-members": true,
                    "mocha-unneeded-done": true,
                    "no-disable-auto-sanitization": true,
                    "no-function-expression": true,
                    "no-inferred-empty-object-type": true,
                    "no-inner-html": true,
                    "no-jquery-raw-elements": true,
                    "no-mergeable-namespace": true,
                    "no-single-line-block-comment": true,
                    "no-string-based-set-immediate": true,
                    "no-string-based-set-interval": true,
                    "no-string-based-set-timeout": true,
                    "no-tautology-expression": true,
                    "no-typeof-undefined": true,
                    "no-unnecessary-callback-wrapper": true,
                    "no-unnecessary-field-initialization": true,
                    "no-unnecessary-local-variable": true,
                    "no-unnecessary-override": true,
                    "no-unsafe-any": true,
                    "no-unsupported-browser-code": true,
                    "no-useless-files": true,
                    "nx-enforce-module-boundaries": [
                        true,
                        {
                            "allow": [
                                "ngrx-entity-relationship"
                            ],
                            "depConstraints": [
                                {
                                    "onlyDependOnLibsWithTags": [
                                        "*"
                                    ],
                                    "sourceTag": "*"
                                }
                            ],
                            "enforceBuildableLibDependency": true
                        }
                    ],
                    "promise-must-complete": true,
                    "react-a11y-accessible-headings": true,
                    "react-a11y-input-elements": true,
                    "react-a11y-meta": true,
                    "react-a11y-no-onchange": true,
                    "react-a11y-required": true,
                    "react-a11y-titles": true,
                    "react-anchor-blank-noopener": true,
                    "react-iframe-missing-sandbox": true,
                    "react-this-binding-issue": true,
                    "react-unused-props-and-state": true,
                    "static-this": true,
                    "strict-type-predicates": true,
                    "typedef": [
                        true,
                        "call-signature",
                        "parameter",
                        "property-declaration",
                        "member-variable-declaration"
                    ],
                    "unnecessary-else": true,
                    "use-named-parameter": true,
                    "use-simple-attributes": true,
                    "whitespace": [
                        true,
                        "check-branch",
                        "check-decl",
                        "check-operator",
                        "check-separator",
                        "check-rest-spread",
                        "check-type",
                        "check-type-operator",
                        "check-preblock"
                    ]
                }
            }
        ]
    }
};
