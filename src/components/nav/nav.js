// @flow
import React from 'react';
import Shed from 'react-shed';
import { NavLink } from 'react-router-dom';
import {
  map,
} from 'ramda';

const items = [
  {
    to: '/scale',
    label: 'Scale',
  },
  {
    to: '/',
    label: 'search',
  },
];

const NavItem = ({
  to,
  label,
} : {
  to: string,
  label: string,
}) => (
  <li.shed
    flxg="1"
    ta="c"
    c="white"
  >
    <NavLink to={to}>{label}</NavLink>
  </li.shed>
);

/*
 * declare type NavComponent = {
 * };
 *
 */

const Nav = () => (
  <div.shed
    px=".5"
    bg="blue"
    c="white"
    tt="u"
    fw="bold"
    ff="code"
    pt=".9"
  >
    <ol.shed
      pl="0"
      lst="n"
      my="0"
      d="f"
    >
      {map(NavItem)(items)}
    </ol.shed>
  </div.shed>
);

export {
  Nav as default,
  Nav as Component,
};
