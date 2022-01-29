import React, { Component } from "react";
import './style.css';

class Main extends Component {
  render() {
      return (
          <div className="body">
              <Nav/>
              <Home/>
          </div>
      );
  }
}

export default Main;