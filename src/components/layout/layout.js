// @flow
import React from 'react';
import Shed from 'react-shed';

const Layout = ({
  children,
}: LayoutComponent) => (
  <div.shed
    bg="black"
  >
    {children}
  </div.shed>
);

export {
  Layout as default,
  Layout as Component,
};
