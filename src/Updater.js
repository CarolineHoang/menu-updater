import React, { Component } from 'react';
import styled from "styled-components";
import DisplayData from "./DisplayData";

const AppWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    margin:0;
    padding:0;
    overflow: scroll;
`;

const AddItemButton =styled.button`
    display: flex;
    justify-content: center;
    height:15vh;
    width: 50vw;
    font-size: 1.5vw;
    :hover{
        background-color: #e8e8e8;
    }
`;
const AddButtonTitle =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:10vh;
    width: 80%;
    font-size: 1.5vw;
`;

const Plus = styled.div`
    font-size: 5vw;
    height: 100%;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;

`;

const PopUp =styled.div`
    font-size:3vw;
    font-weight: bold;
    height: 40vh;
    width: 60vw;
    position: fixed;
    right: 0;
    bottom:0;
    z-index: 10;
    background-color: white;
    border-style: solid;
    border-color: black;
    padding: 1vw 2vw 0 2vw; //top right bottom left clock wise
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
`;


const ClosePopButton = styled.button`
    background-color: transparent;
    font-size: 2vw;
    height: 3vw;
    width: 3vw;
    color:black;
    display: flex;
    justify-content: center;
    align-items: center;
    float:right;
    z-index: 20;
    transition: .5s;
    :hover{
        background-color: gray !important;
        color: white
    } 
`;

const PopHeader = styled.div`
    font-size:3vw;
    font-weight: bold;
    height: 15vh;
    text-align: left;
    opacity: .4;
    display: flex;
    justify-content: space-between;
`;


const SectItemContainer = styled.div`
    display: flex;
    flex-direction:  column;

`;

const SectionWrapperLeft = styled.div`
    display: flex;
    position:absolute;
    height: 100%;
    width: 50%;
    left:0px;
    top:0px;
    border-right: black solid 5px;
    z-index: 5
`;

const SectionWrapperRight = styled.div`
    display: flex;
    position:absolute;
    height: 100%;
    width: 50%;
    right:0px;
    top:0px;
    z-index: 1

`;

const Section= styled.div`
`;


const Form = styled.form`
    display: flex;  
`;


const Input = styled.input`
    width: 42.8vw; 
    height: 4vw;
    font-size: 1.5vw;
    padding-left: 3vw;
    ::placeholder {
        font-size: 1.5vw;
        color:black;
}
`;

const InputWrapper = styled.div`
    display: flex;
    justify-position: space-evenly;
`;

const InputContainer = styled.div `
    display: flex;
    flex-direction: column;
    font-size:1vw;
`;

const AddButton = styled.button`
    width: 5vw;
    font-size: 3vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;



const Label = styled.div`
    width: 6vw;
    display: flex;
    align-items: center;
`;



const Error = styled.div`
    color: red;
`;




class Updater extends Component {

    constructor(props) {
        super(props);
        
        this.state = {

            clicked: true,
            currentSection: null,
            currentItem: null,
            currentType: null,  
            Menu: this.props.Menu,

            items:  [
            ],

            arrayItems:  [
            ],

            Sections:[
            ],

            value: '',

            price: null,

            popUp: false,

            type2Add: null,

            errorMsg: ""


        };

        var index =0;

        for(var i = 0; i < this.state.Menu.MenuSection.length; i++){
            for(var j = 0; j < this.state.Menu.MenuSection[i].Items.length; j++){
            this.state.arrayItems[index] =  {   text: this.state.Menu.MenuSection[i].Items[j].title,
                                                "price": this.state.Menu.MenuSection[i].Items[j].price,
                                                "Section": this.state.Menu.MenuSection[i].name,
                                                "type": "Item", 
                                                key: index
                                    };
            index++;
            };

        };
       
        for(var i = 0; i < this.state.Menu.MenuSection.length; i++){
            this.state.Sections[i] =    {   text:this.state.Menu.MenuSection[i].name,
                                            "type": "Section",
                                            key: index
                                        };
            index++;
            };



        this.setCurrentState = this.setCurrentState.bind(this);

        this.addItem = this.addItem.bind(this);

        this.popUpToggle = this.popUpToggle.bind(this);

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    addItem(type,e) {

        var inputEL = this.state.value;

        if (inputEL !== "") {
            var newItem = {
              text: inputEL,
              "title": inputEL,
              "price": this.state.price || 0,
            "Section": this.state.currentSection,
               "type": type,

              key: this.state.index
            };

            if  (type== "Item")   {
                this.state.index++
        
                this.setState((prevState) => {

                    return { 
                            arrayItems: prevState.arrayItems.concat(newItem) 
                    };

                });
            }




            else if  (type== "Section")   {
                    this.state.index++
                    this.setState((prevState) => {
    
                        return { 
                            
                                Sections: prevState.Sections.concat(newItem) 
                        };
                    });
                }
            }


            e.preventDefault();
            this.setState({     
                                popUp: false,
                                value: "",
                                price: ""        
            });
    };  
    
    setCurrentState(Section, Type) {
        

        if (this.state.Section !== null) {
            this.setState({ errorMsg:""})
        }

        if (this.state.currentSection===Section){
            this.setState({ currentSection: null,
                            value: "",
                            popUp: false})
        }

        else{
        const currentState = this.state.clicked;
        this.setState({ clicked: !currentState ,
                        currentSection: Section,
                        value: "",
                        type2Add: Type,
                        popUp: false
                        });
        }
    };

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }


    popUpToggle(type,Close){

        if (Close == true){
                this.setState({popUp: false,
                               value: ""    });
                                      
        }
        else if (this.state.currentSection !== null || type == "Section"){

            if (type !== this.state.type2Add && this.state.type2Add !== null ){
            const popDisp = this.state.popUp;
                this.setState({ popUp: true, 
                                type2Add: type,
                                errorMsg:"",
                                value: ""
                });            
            }

            else{
                const popDisp = this.state.popUp;
                this.setState({ popUp: !popDisp, 
                                type2Add: type,
                                errorMsg:""
                });  
            } 
        }

        else{
            this.setState({errorMsg: "*** Please Choose a Section ***",
                            popUp: false});
        }               
    };

    render() {
        
        if (this.state.popUp == true){
 
            var type2Add = this.state.type2Add;
            var priceDisp = null;


            if (this.state.type2Add === "Item"){
                priceDisp = 
                <InputWrapper>
                <Label>Item Price:</Label>
                <Input type="number"  step="0.01" name="price" value={this.state.price} onChange={this.handleInputChange} placeholder="enter price"/>
                </InputWrapper>;
            }

            var popDisplay=
            <PopUp>
                <PopHeader>Add a new {this.state.type2Add}
                    <ClosePopButton onClick= {() => this.popUpToggle(null,true)}>X</ClosePopButton>
                </PopHeader>
            
            <Form onSubmit={this.addItem.bind(this,type2Add)}>
            <InputContainer>
            <InputWrapper>
            <Label>Name:   </Label>   
            <Input type="text" name="value" value={this.state.value} onChange={this.handleInputChange} placeholder="enter name"/>
            </InputWrapper>
            {priceDisp}

            </InputContainer>

          <AddButton type="submit">+</AddButton>
        </Form> 
        </PopUp>;
        }

      return (
            <AppWrapper>

                <SectionWrapperLeft>
                    <Section>
                        <AddItemButton onClick= {() => this.popUpToggle("Section")}>
                            <AddButtonTitle>Menu Sections</AddButtonTitle>
                            <Plus>+</Plus>
                        </AddItemButton>
                        {popDisplay}
                        <DisplayData setCurrentState= {this.setCurrentState} 
                                     entries={this.state.Sections} 
                                     currentSection={this.state.currentSection} 
                                     currentItem={this.state.currentItem}        />
                    </Section>
                 </SectionWrapperLeft>



                <SectionWrapperRight>
                    <Section>
                         <AddItemButton onClick= {() => this.popUpToggle("Item")}>
                            <AddButtonTitle>
                                <SectItemContainer>
                                    Section Items
                                    <Error>{this.state.errorMsg}</Error>
                                </SectItemContainer>
                            </AddButtonTitle> 
                            <Plus>+</Plus>
                        </AddItemButton>

                        {popDisplay}
 
                        <DisplayData setCurrentState= {this.setCurrentState} entries={this.state.arrayItems} 
                                                    currentSection={this.state.currentSection} 
                                                    currentItem={this.state.currentItem} 
                                                    type2Add={this.state.type2Add}                      />
                    </Section>
                </SectionWrapperRight>

        </AppWrapper>
        );
    }
  }
  
  export default Updater;
  


