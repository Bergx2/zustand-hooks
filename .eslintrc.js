module.exports = {
  extends: ["eslint-config-zustand-hooks"],
  plugins: ["zustand-hooks"],
  rules: {
    'no-destructure-zustand-hook': require('./rules/no-destructure-zustand-hooks')
  },
};
