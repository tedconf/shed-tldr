/* eslint-disable global-require */
module.exports = (plop) => {
  const passwdUser = require('passwd-user');
  const currentUser = passwdUser.sync().fullname;

  plop.addHelper('ifItem', (it, arr, options) => (
    arr.indexOf(it) > -1 ? options.fn(this) : options.inverse(this)
  ));

  plop.setGenerator('config', {
    description: 'configure the app',
    prompts: [
      {
        type: 'input',
        name: 'appName',
        message: 'What\'s the name of your app?',
        validate: value => (
          (/.+/).test(value) ? true : 'you must name your app'
        ),
      },
      {
        type: 'input',
        name: 'appDesc',
        message: 'Describe your app (this will go in your package.json and readme)',
        validate: value => (
          (/.+/).test(value)
            ? true
            : 'no one will know what this is if you don\'t describe it'
        ),
      },
      {
        type: 'input',
        name: 'appAuthor',
        message: 'Who are you?',
        default: currentUser,
        validate: value => (
          (/.+/).test(value)
            ? true
            : 'I must know who you are.'
        ),
      },
      {
        type: 'confirm',
        name: 'isRedux',
        message: 'Will your app use redux as its data store?',
      },
    ],
    actions: [
      // set up package.json
      {
        type: 'modify',
        path: '../package.json',
        pattern: /--APP_NAME--/g,
        template: '{{kebabCase appName}}',
      },
      {
        type: 'modify',
        path: '../package.json',
        pattern: /--APP_DESC--/gi,
        template: '{{sentenceCase appDesc}}',
      },
      {
        type: 'modify',
        path: '../package.json',
        pattern: /--APP_AUTHOR--/gi,
        template: '{{appAuthor}}',
      },

      // set up readme
      {
        type: 'modify',
        path: '../README.md',
        pattern: /--APP_NAME--/g,
        template: '{{titleCase appName}}',
      },
      {
        type: 'modify',
        path: '../README.md',
        pattern: /--APP_DESC--/gi,
        template: '{{sentenceCase appDesc}}',
      },
      {
        type: 'modify',
        path: '../README.md',
        pattern: /--APP_AUTHOR--/gi,
        template: '{{appAuthor}}',
      },

      // set up config
      {
        type: 'modify',
        path: '../webpack.config.js',
        pattern: /--APP_NAME--/g,
        template: '{{titleCase appName}}',
      },

      // remove redux from package.json
      {
        type: 'modify',
        path: '../package.json',
        pattern: /(.+redux.+,)/g,
        template: '{{#if isRedux}}$1{{else}}{{/if}}',
      },
      ({ isRedux }) => {
        /*
         * move the current working directory to the plop file path
         * this allows this action to work even when the generator is
         * executed from inside a subdirectory
         */
        if (isRedux === false) {
          process.chdir(plop.getPlopfilePath());

          // custom function can be synchronous or async (by returning a promise)
          const rimraf = require('rimraf');
          rimraf('../src/config', () => `is_redux is false: ${isRedux}`);
        }
        return isRedux;
      },
    ],
  });

  plop.setGenerator('component', {
    decription: 'create a new component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'What\'s the name of your component?',
        validate: value => (
          (/.+/).test(value) ? true : 'you must name your component'
        ),
      },
      {
        type: 'checkbox',
        name: 'componentFeatures',
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
        ],
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{kebabCase componentName}}/{{kebabCase componentName}}.js',
        templateFile: '../.templates/component.js',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase componentName}}/index.js',
        templateFile: '../.templates/component_index.js',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase componentName}}/{{kebabCase componentName}}.spec.js',
        templateFile: '../.templates/component.spec.js',
        abortOnFail: true,
      },
    ],
  });
};
/* eslint-enable global-require */
