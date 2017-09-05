# shed tldr

Quick lookup for shed classes.

```sh
yarn install
yarn generate config
yarn start
```

now, open your browser to

- `http://localhost:1984` for the app
- `http://localhost:2001` for the storybook (an interactive component library)

## Use

Start by cloning this repo and running `yarn install`. Next, run `yarn generate
config`. This will walk you through the necessary steps to create your
configuration files and update the `README`. This gives you a bare-minimum
starting point for your app.

Next, you can scaffold components. run `yarn g component` (`g` is short for
`generate` and can be used as such in any command). This [plop
generator](http://ghub.io/plop) will allow you to choose which features your
component should have, as outlined below:

1. __Connected to the Redux Store.__ Should your component have access to the
   store to get data or dispatch actions? This will wrap your component in
   a `connect()` HOC and scaffold a `mapStateToProps` and `mapDispatchToProps`.
   It uses a `compose()` fn by default so you can easily add other HOCs.
2. __Asynchronously Loaded.__ Should your component be fetched on demand rather
   than bundled into the core js file? This option wraps your component in a
   [React Loadable](http://ghub.io/react-loadable) component. Be sure to replace the
   `LoadingComponent` prop with your own.

Each component gets an `index.js`, a `component.js`, a `component.spec.js`, and
a `component.story.js`.

- `index.js` is your component's entry point.
- `component.js` is where your component's implementation lives.
- `component.spec.js` is where your `jest`/`enzyme` tests go.
- `component.story.js` is your component's entry into the `storybook`.

## Tools

This app is built using the following tools:

#### CORE

- [React](http://ghub.io/react)
- [React Router](http://ghub.io/react-router)
- [Redux](http://ghub.io/redux)
- [Jest](http://ghub.io/jest)
- [Enzyme](http://ghub.io/enzyme)
- [Webpack](http://ghub.io/webpack)

#### SUPPLEMENTARY

- [React Shed](http://ghub.io/react-shed)
- [Glamorous](http://ghub.io/glamorous)
- [React Loadable](http://ghub.io/react-loadable)
- [React Media](http://ghub.io/react-media) (our own build until they release
  a version with support for multiple queries)
- [Redux Action Types Creator](http://ghub.io/redux-action-types-creator)
- [Redux Create Reducer](http://ghub.io/redux-create-reducer)
- [Storybook](//github.com/kadirahq/react-storybook)
- [plop](http://ghub.io/plop)
