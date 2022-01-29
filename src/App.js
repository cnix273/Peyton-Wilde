import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from "./components/Main";
import Nav from "./components/Nav";

import './App.css';

function App() {
  return (
    <Router>
        <Nav/>
        <Main/>
        {/* <Footer/> */}
    </Router>
  );
}

export default App;
