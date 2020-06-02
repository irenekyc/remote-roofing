import React, {Fragment} from 'react';
import {useSelector } from 'react-redux'
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import Login from './components/Login'
import Register from './components/Register'



function App() {
  const curPage = useSelector(state=> state.web.curPage)

  return (
    
        <Fragment>
      
          <Header />
          <main className="main-content-container">
            <div className="wrapper">
              {curPage ==="home" || curPage ==="movie" || curPage === "series" ? <Content />: null}
              {curPage === "login" && (<Login />)}
              {curPage === "register" && (<Register />)}
            </div>
            </main>
      
          <Footer />
        </Fragment>

  );
}

export default App;
