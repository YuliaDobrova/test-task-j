import React from 'react';
import AppRouter from '../appRouter/AppRouter';
import Container from '../container/Container';
import { MainStyled } from './MainStyled';

const Main = () => {
  return (
    <MainStyled>
      <Container>
        <AppRouter />
      </Container>
    </MainStyled>
  );
};

export default Main;
