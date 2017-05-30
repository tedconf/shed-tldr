import React from 'react';
import Shed from 'react-shed';
import { Logo as TEDLogo } from 'components/branding';
import Layout from 'components/layout';

const HomeScreen = () => (
  <Layout>
    <div.shed w="10">
      <h1.shed>
        <TEDLogo />
      </h1.shed>
    </div.shed>
  </Layout>
);

export default HomeScreen;
