import node from 'eslint-config-htmlacademy/node';

export default [
  ...node,
  {
    files: ['test/**/*.js'],
    rules: {
      camelcase: 'off',
    },
  },
];
