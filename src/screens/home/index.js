// @flow
import React from 'react';
import Shed from 'react-shed';
import Layout from 'components/layout';

const HomeScreen = (): React$Element<> => (
  <Layout>
    <div.shed
      w="8of12"
    >
      <input.shed
        p=".2"
        w="full"
        ff="code"
        style={{
          border: '1px solid rgba(0,0,0,.2)',
          outline: 'none',
        }}
        placeholder="search for a CSS property name or class name"
      />
      <div.shed
        h="20"
        o="s"
      >
        <table.shed
          ff="code"
          w="full"
        >
          <tbody.shed
            w="full"
          >
            <tr.shed>
              <td.shed
                w="6of12"
                p="4"
              >
              .aspect-ratio--16x9
              </td.shed>
              <td.shed
                w="6of12"
                p="4"
              >
              paddingBottom: 56.25%
              </td.shed>
            </tr.shed>

            <tr.shed
              bg="gray-ll"
            >
              <td.shed
                w="6of12"
                p="4"
              >
              .aspect-ratio--9x16
              </td.shed>
              <td.shed
                w="6of12"
                p="4"
              >
              paddingBottom: 177.77%
              </td.shed>
            </tr.shed>
          </tbody.shed>
        </table.shed>
      </div.shed>
    </div.shed>
  </Layout>
);

export default HomeScreen;
