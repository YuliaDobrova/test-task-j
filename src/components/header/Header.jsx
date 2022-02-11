import React from 'react';
import Container from '../container/Container';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import UserLogin from '../userLogin/UserLogin';
import { HeaderStyled } from './HeaderStyled';

const Header = () => {
  return (
    <Container>
      <HeaderStyled>
        <Logo />
        <Navigation />
        <UserLogin />
      </HeaderStyled>
    </Container>
  );
};

export default Header;
