# --APP_NAME--

--APP_DESCRIPTION--

```sh
yarn install
yarn start
```

## Use

Start by cloning this repo. Next, run `yarn generate config`. This will walk
you through the necessary steps to create your configuration files and update
the `README`. This gives you a bare-minimum starting point for your app.

Next, you can scaffold components. run `yarn g component` (`g` is short for
`generate` and can be used as such in any command). The generator will allow
you to choose which features your component should have, as outlined below:

1. __Connected to the Redux Store.__ Should your component have access to the
   store to get data or dispatch actions? This will wrap your component in
   a `connect()` HOC and scaffold a `mapStateToProps` and `mapDispatchToProps`.
   It uses a `compose()` fn by default so you can easily add other HOCs.
2. __Asynchronously Loaded.__ Should your component be fetched on demand rather
   than bundled into the core js file? This option wraps your component in a
   [React Loadable](//ghub.io/react-loadable) component. Be sure to replace the
   `LoadingComponent` prop with your own.

## Tools

This app is built using the following tools:

#### CORE

- [React](//ghub.io/react)
- [React Router](//ghub.io/react-router)
- [Redux](//ghub.io/redux)
- [Jest](//ghub.io/jest)
- [Enzyme](//ghub.io/enzyme)
- [Webpack](//ghub.io/webpack)

#### SUPPLEMENTARY

- [React Shed](//ghub.io/react-shed)
- [Styled Components](//ghub.io/styled-components)
- [React Loadable](//ghub.io/react-loadable)
- [React Media](//ghub.io/react-media) (our own build until they release
  a version with support for multiple queries)
- [Redux Action Types Creator](//ghub.io/redux-action-types-creator)
- [Redux Create Reducer](//ghub.io/redux-create-reducer)
