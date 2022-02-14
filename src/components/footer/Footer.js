import React from 'react';

import Container from '../container/Container';
import sprite from '../../images/sprite.svg';
import { FooterStyled } from './FooterStyled.js';

const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <div className="FooterWrapper">
          <p className="FooterText">©2022 Cteated to improve React skills</p>
          <svg className="FooterIcon" width="24" height="24">
            <use href={sprite + '#icon-react'}></use>
          </svg>
        </div>
        <p className="FooterDeveloperText">
          Designed by
          <a
            href="https://www.linkedin.com/company/tensionx/"
            target="_blank"
            rel="noreferrer"
            className="Developer"
          >
            TensionX
          </a>
        </p>
        <p className="FooterDeveloperText">
          Developed by
          <a
            href="https://www.linkedin.com/in/yulia-dobrova-37a335217/"
            target="_blank"
            rel="noreferrer"
            className="Developer"
          >
            Yulia Dobrova
          </a>
        </p>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
