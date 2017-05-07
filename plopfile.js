module.exports = plop => {
  plop.setGenerator('config', {
    description: 'configure the app',
    prompts: [
      {
        type: 'input',
        name: 'app_name',
        message: 'What\'s the name of your app?',
        validate: value => {
          if ((/.+/).test(value)) {
            return true;
          }
          return 'you must name your app';
        },
      },
      {
        type: 'input',
        name: 'app_desc',
        message: 'Describe your app (this will go in your package.json and readme)',
        validate: value => {
          if ((/.+/).test(value)) {
            return true;
          }
          return 'no one will know what this is if you don\'t describe it';
        },
      },
    ],
    actions: [
      // set up package.json
      {
        type: 'modify',
        path: './package.json',
        pattern: /--APP_NAME--/g,
        template: '{{kebabCase app_name}}',
      },
      {
        type: 'modify',
        path: './package.json',
        pattern: /--APP_DESC--/gi,
        template: '{{sentenceCase app_desc}}',
      },

      // set up readme
      {
        type: 'modify',
        path: './README.md',
        pattern: /--APP_NAME--/g,
        template: '{{titleCase app_name}}',
      },
      {
        type: 'modify',
        path: './README.md',
        pattern: /--APP_DESC--/gi,
        template: '{{sentenceCase app_desc}}',
      },
      // set up config
      {
        type: 'modify',
        path: './webpack.config.js',
        pattern: /--APP_NAME--/g,
        template: '{{titleCase app_name}}',
      },
    ],
  });
};
