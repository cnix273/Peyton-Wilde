import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import './style.css';

import Home from "../Home";
import About from "../About";

class Main extends Component {
    render() {
        return (
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/about' element={<About/>} />
            </Routes>
        );
    }
}
  
export default Main;