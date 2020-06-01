import React, {Fragment, useState} from 'react';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'


function App() {
  const [curPage, setCurPage] = useState("home")
  const changePageHandler = (e)=>{
    setCurPage(e)
  }
  return (
    <Fragment>
      <Header curPage={curPage}/>
 
       <Content curPage={curPage} changePage ={(e)=>changePageHandler(e)}/>
  
      <Footer />
    </Fragment>
  );
}

export default App;
