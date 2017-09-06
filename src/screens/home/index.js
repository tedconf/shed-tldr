// @flow
import React from 'react';
import Shed from 'react-shed';
import Layout from 'components/layout';
import ResultsList from 'components/results-list';
import parsedShed from 'components/parse-css';
import SearchBox from 'components/search-box';

const HomeScreen = (): React$Element<> => (
  <Layout>
    <div.shed
      w="8of12"
    >
      <SearchBox />
      <div.shed
        h="20"
        o="s"
        mx=".6"
      >
        <ResultsList results={parsedShed} />
      </div.shed>
    </div.shed>
  </Layout>
);

export default HomeScreen;
