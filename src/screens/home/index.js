// @flow
import React from 'react';
import Shed from 'react-shed';
import {
  compose,
  lifecycle,
} from 'recompose';
import { connect } from 'react-redux';
import Layout from 'components/layout';
import appActions from 'components/application/action-creators';

const HomeScreen = (): React$Element<> => (
  <Layout>
    <h1.shed
      f="4"
    >
      This is the home screen.
    </h1.shed>
  </Layout>
);

const mapDispatchToProps = {
  initialize: appActions.initialize,
};

const withInitializer = compose(
  connect(undefined, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      this.props.initialize();
    },
  }),
);

export default withInitializer(HomeScreen);
