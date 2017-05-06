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
      actions: [
        {
          type: 'modify',
          path: './package.json',
          pattern: /ted-app-generator/g,
          template: '{{kebabCase app_name}}',
        }
      ],
    ]
  });
};
