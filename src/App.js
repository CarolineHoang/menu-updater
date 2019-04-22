import React, { Component } from 'react';
import './App.css';
import styled from "styled-components";

import Menu from './Menu.json';
import MenuSection from './MenuSection';






class App extends Component {

  
//   toggleClass() {
//     const currentState = this.state.clicked;
//     this.setState({ clicked: !currentState });
//     console.log("soemtnisnfgairnjADCSEFVWSEVCWEC");
// };


  render() {

    return (
      <div className="App">
          <MenuSection Menu = {Menu} />
      </div>
    );
  }
}

export default App;






