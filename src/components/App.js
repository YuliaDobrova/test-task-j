import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './header/Header';
import SubHeader from './subheader/SubHeader';
import Main from './main/Main';
import './App.css';

// import '../styles/common.scss';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <SubHeader />
        <Main />
      </BrowserRouter>
    </>
  );
};

export default App;
