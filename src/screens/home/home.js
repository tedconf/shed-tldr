// @flow
import React from 'react';
import Shed from 'react-shed';
import Layout from 'components/layout';
import Search from 'components/search';

const HomeScreen = (): React$Element<> => (
  <Layout>
    <div.shed
      w="6of12"
      mt="14"
    >
      <Search />
    </div.shed>
  </Layout>
);

export default HomeScreen;
