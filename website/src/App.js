import React, { Component } from 'react'; 
import { Routes, Route } from 'react-router-dom'; 

import Layout from './Layout'; 
import Home from './containers/Home/Home';
import Team from './containers/Team/Team';

import GeneralError from './shared/userInterfaces/errors/GeneralError/GeneralError';
import NotFoundError from './shared/userInterfaces/errors/NotFoundError/NotFoundError';

class App extends Component {
  render() {
    return (
        <Layout>
            <Routes>
              <Route path="/" element={<Home/>} errorElement={<GeneralError/>}/>
              <Route path="/team" element={<Team/>} errorElement={<GeneralError/>}/>
              <Route path="*" element={<NotFoundError/>} errorElement={<GeneralError/>}/> 
            </Routes>
        </Layout>
      )
  }
}

export default App;
