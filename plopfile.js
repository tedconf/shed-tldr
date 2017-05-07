module.exports = plop => {
  plop.addHelper('ifItem', (it, arr, options) => (
    arr.indexOf(it) > -1 ? options.fn(this) : ''
  ));
  plop.setGenerator('config', {
    description: 'configure the app',
    prompts: [
      {
        type: 'input',
        name: 'app_name',
        message: 'What\'s the name of your app?',
        validate: value => (
          (/.+/).test(value) ? true : 'you must name your app'
        ),
      },
      {
        type: 'input',
        name: 'app_desc',
        message: 'Describe your app (this will go in your package.json and readme)',
        validate: value => (
          (/.+/).test(value)
            ? true
            : 'no one will know what this is if you don\'t describe it'
        ),
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
  plop.setGenerator('component', {
    decription: 'create a new component',
    prompts: [
      {
        type: 'input',
        name: 'component_name',
        message: 'What\'s the name of your component?',
        validate: value => (
          (/.+/).test(value) ? true : 'you must name your component'
        ),
      },
      {
        type: 'checkbox',
        name: 'component_features',
        message: 'What featrues does your component need?',
        choices: [
          {
            name: 'Connected To The Redux Store',
            value: 'connected',
            checked: true,
          },
          {
            name: 'Asynchronously Loaded',
            value: 'asynch',
            checked: true,
          },
        ]
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{kebabCase component_name}}/{{kebabCase component_name}}.js',
        templateFile: '.templates/component.js',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: 'src/components/{{kebabCase component_name}}/index.js',
        templateFile: '.templates/component_index.js',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: 'src/components/{{kebabCase component_name}}/{{kebabCase component_name}}.spec.js',
        templateFile: '.templates/component.spec.js',
        abortOnFail: true,
      },
    ],
  });
};
