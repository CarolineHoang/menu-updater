import React, { Component } from 'react';
import styled from "styled-components";


const SectionProperties = styled.div`
    height: 5vw;
    left:0;
    width:100%;
    color: black;
    background-color: white;
    border-style: solid;
    border-color solid;
    border-width: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        background-color: #e8e8e8 !important;
    }
    font-size: 1.3vw;
`;
const ItemProperties = styled.div`
    height: 5vw;
    left:0;
    width:100%;
    color: black;
    background-color: white;
    border-style: solid;
    border-color solid;
    border-width: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
            background-color: #46E487 !important;
            border-top    : 5px solid black;
            border-bottom : 5px solid black;
    }
    font-size: 1.3vw;
`;



const SectItemContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
 
class DisplayData extends Component {

    constructor() {
        super();
        
        this.state = {
          clicked: true,

        };
      }


    createSections(item, toggle, currentSection) {

        var activeColor = "white";
        if (currentSection == item.text){
            var activeColor = "#46E487";  // green
            var activeBorder  = "5px solid black";
        }
        if (item.type=="Section"){
        return <div key={item.key} currentSection= {item.Section}>

        <SectionProperties type= "submit" onClick={() => toggle(item.text,item.type)} currentSectionA= {item.text} style={{"background-color": activeColor, "border-top": activeBorder, "border-bottom": activeBorder, "border-right": "solid black 5px"}}>{item.text}</SectionProperties>

        </div>
        }
    };

  
    createItems(item, toggle, currentSection) {

        var activeColor = "white";

        if (item.type=="Item" && item.Section == currentSection) {
            return <ItemProperties currentSectionA= {item.text}  style={{"background-color": activeColor}}>
                        <SectItemContainer>
                            {item.text}
                            <div>
                                price: ${item.price}
                            </div>
                        </SectItemContainer>
                    </ItemProperties>
        }
    };



    render() {
        var todoEntries = this.props.entries;
        var Sections = todoEntries.map((todoEntries,{toggleClass2}) => this.createSections(todoEntries,this.props.toggleClass2,this.props.currentSection,this.props.type2Add));
        var items = todoEntries.map((todoEntries,{toggleClass2}) => this.createItems(todoEntries,this.props.toggleClass2,this.props.currentSection));


        
        return (
            <div>

            {Sections} 

            {items} 

            </div>
        );
    
    }
};
 
export default DisplayData;
  