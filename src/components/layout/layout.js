// @flow
import React from 'react';
import Shed from 'react-shed';
import { OpenSourceLogo } from 'components/branding';
import 'components/reset/index.css';

declare type LayoutComponent = {
  children: any,
}

const Layout = ({
  children,
}: LayoutComponent) => (
  <div.shed>
    <header.shed
      mx="14"
      my="10"
    >
      <h1.shed
        fw="700"
        f="3"
        c="blue"
      >
        shed tldr
        <small.shed
          fw="400"
          f="1"
          ml=".5"
        >
          v1.3.0
        </small.shed>
      </h1.shed>
    </header.shed>
    <main>
      <div.shed
        d="f"
        jc="c"
      >
        {children}
      </div.shed>
    </main>
    <footer.shed
      p="1"
      d="f"
      jc="f-e"
      bg="white"
      css={{
        position: 'absolute',
        bottom: '0',
        right: '0',
      }}
    >
      <div.shed
        w="12"
      >
        <OpenSourceLogo />
      </div.shed>
    </footer.shed>
  </div.shed>
);

export {
  Layout as default,
  Layout as Component,
};
