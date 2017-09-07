// @flow
import React from 'react';
import Shed from 'react-shed';
import Scale from 'components/scale';
import Layout from 'components/layout';

const ScaleScreen = (): React$Element<> => (
  <Layout>
    <Scale
      name="minor second"
      steps={30}
    />
  </Layout>
);

export default ScaleScreen;
