import React from 'react';
import AppRouter from '../appRouter/AppRouter';
import { MainStyled } from './MainStyled';

const Main = () => {
  return (
    <MainStyled>
      <AppRouter />
    </MainStyled>
  );
};

export default Main;
