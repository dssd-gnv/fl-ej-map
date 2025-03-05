import React from 'react';
import { slide as Menu } from 'react-burger-menu';

const Panel = () => {
  return (
    <Menu>
    <a className="menu-item" href="/component1">Component 1</a>
    <a className="menu-item" href="/component2">Component 2</a>
    <a className="menu-item" href="/component3">Component 3</a>
  </Menu>
  );
};

export default Panel;