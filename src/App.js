import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Menu from './Menu.json';
import MenuSection from './MenuSection';
import SectionItems from './SectionItems';
import styled from "styled-components";

const something1 ={something: 5398530};

const TestButton = styled.button`
height: 5vw;
width: 4vw;
background-color: red;
z-index: 40;
font-size: 50px;
`;

const testerButton = styled.button`
  width: 4vw;
  height:4vw;
  background-color: pink;

`;

  class DisplaySectionItems extends React.Component {
    render() {
      return (
      <SectionItems Menu = {Menu}/>
      );
    }  
  }


  class SideBarExtended extends React.Component {


  constructor(props) {
    super(props);
    
    this.state = {

        clicked: true,
          

        items:  [
        ],
        arrayItems:  [
        ],

        Sections:[],
        currentSection: null
      };




      var index2 =0; 

      for(var i = 0; i < Menu.MenuSection.length; i++){
        for(var j = 0; j < Menu.MenuSection[i].Items.length; j++){
        this.state.arrayItems[index2] = {text: Menu.MenuSection[i].Items[j].title,
                                    "price": Menu.MenuSection[i].Items[j].price, };

        index2++;
        };

    };


           

   
    for(var i = 0; i < Menu.MenuSection.length; i++){
        this.state.Sections[i] = {text: Menu.MenuSection[i].name};
        index2++;
        };


}












  //   toggleClass2() {
  //     const currentState = this.state.clicked;
  //     this.setState({ clicked: !currentState });
  //     console.log(this.state.clicked);
  //     console.log("this.state.clicked)");

  // };


    render() {
        if (this.props.clicked) {
            return (
                <div {...this.props} >  
                   {/* <SectionItems Menu = {Menu} entries={this.state.Sections} style = "background-color:red"/>          */}
                   {/* onClick={this.toggleClass}  */}
                </div>
            );


          } else if (this.props.clicked===false){
                return (
                    <div {...this.props} >  
                            

                            
                    </div>
                  );


          }else {
                return (
                    <div {...this.props} >  
                    </div>

                );
            }
    }  
  }

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      clicked: null
    };
    
    // this.toggleClass = this.toggleClass.bind(this);
    console.log("ASFKJAKDCJASELN");
  }

  
//   toggleClass() {
//     const currentState = this.state.clicked;
//     this.setState({ clicked: !currentState });
//     console.log("soemtnisnfgairnjADCSEFVWSEVCWEC");
// };


  render() {



    return (
      <div className="App">
          {/* <TestButton onClick={this.toggleClass}>somethign </TestButton> */}
          <testerButton/>
          <SideBarExtended clicked= {this.state.clicked } {...this.props}/>
          {/* <div onClick={this.toggleClass}> */}
          <MenuSection Menu = {Menu} />

      
      </div>
    );
  }
}

export default App;



