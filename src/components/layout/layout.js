// @flow
import React from 'react';
import Shed from 'react-shed';
import { Logo as TEDLogo } from 'components/branding';

declare type LayoutComponent = {
  children: any,
}

const Layout = ({
  children,
}: LayoutComponent) => (
  <div.shed
    h="full"
  >
    <header.shed bg="black">
      <div.shed w="10">
        <div.shed>
          <TEDLogo />
        </div.shed>
      </div.shed>
    </header.shed>
    <main>
      <div.shed
        p="1"
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
