import React from 'react';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import { HeaderStyled } from './HeaderStyled';

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
