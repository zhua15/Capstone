import React, { Component } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import TestPage from './Pages/TestPage';

const ROUTE_PATH = "/";

class App extends Component {
  render() {
    return (
      <HashRouter basename={ROUTE_PATH}>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/test" element={<TestPage/>} />
          </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default App;