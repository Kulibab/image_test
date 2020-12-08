import React from 'react';
import c from './App.module.scss';
import Footer from './components/Footer/Footer';
import ImgList from './components/ImgList/ImgList';

const App = () => {


  return (
    <div className={c.App}>
      <title>Test app</title>
      <h1>TEST APP</h1>
      <div className={c.mainWrap}> 
      <ImgList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
