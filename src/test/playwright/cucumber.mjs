const config = {
  requireModule: ['ts-node/register'],
  require: ['./src/steps/**/*.ts', './src/hooks/*.ts'],
  format: [
    '@serenity-js/cucumber'
  ],
  formatOptions: { snippetInterface: 'async-await' },
  publishQuiet: true,
  tags: "@UI",
  paths: ["../resources/features"]
};

export default config;