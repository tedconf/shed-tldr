// @flow
import React from 'react';
import Shed from 'react-shed';

declare type LayoutComponent = {
  children: any,
}

const Layout = ({
  children,
}: LayoutComponent) => (
  <div.shed
    h="full"
  >
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
        mx="14"
        d="f"
        jc="c"
      >
        {children}
      </div.shed>
    </main>
  </div.shed>
);

export {
  Layout as default,
  Layout as Component,
};
