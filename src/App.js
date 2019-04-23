import React, { Component } from 'react';
import './App.css';
import styled from "styled-components";

import Menu from './json/Menu.json';
import Updater from './components/Updater';






class App extends Component {

  
//   toggleClass() {
//     const currentState = this.state.clicked;
//     this.setState({ clicked: !currentState });
//     console.log("soemtnisnfgairnjADCSEFVWSEVCWEC");
// };


  render() {

    return (
      <div className="App">
          <Updater Menu = {Menu} />
      </div>
    );
  }
}

export default App;






