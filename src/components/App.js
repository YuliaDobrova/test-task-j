import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './header/Header';
import SubHeader from './subheader/SubHeader';
import Main from './main/Main';
import Footer from './footer/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <SubHeader />
        <Main />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
