import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Book (64x64).png';
import { LogoStyled } from './LogoStyled';

const Logo = () => {
  return (
    <LogoStyled>
      <Link className="LogoLink" to="/students" exact="true">
        <img src={logo} className="Logo" alt="Logo" />
      </Link>
    </LogoStyled>
  );
};

export default Logo;
