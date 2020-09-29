module.exports = {
  extends: `stylelint-config-recommended`,
  rules: {
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          `tailwind`,
          `apply`,
          `variants`,
          `responsive`,
          `screen`
        ]
      }
    ]
  }
};
