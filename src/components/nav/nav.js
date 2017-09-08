// @flow
import React from 'react';
import Shed from 'react-shed';
import { NavLink } from 'react-router-dom';
import {
  map,
} from 'ramda';

const items = [
  {
    to: '/',
    label: 'Classes',
  },
  {
    to: '/scale',
    label: 'Scales',
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
    ml="1"
    c="blue"
  >
    <NavLink to={to}>{label}</NavLink>
  </li.shed>
);

const Nav = () => (
  <ul.shed
    lst="n"
    d="f"
  >
    {map(NavItem)(items)}
  </ul.shed>
);

export {
  Nav as default,
  Nav as Component,
};
