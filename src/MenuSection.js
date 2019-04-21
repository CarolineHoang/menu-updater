import React, { Component } from 'react';

import styled from "styled-components";
// import TodoItems from "./TodoItems";

const AppWrapper = styled.div`
    width: 100vw;
    height: 100vh;
   
    background-color:purple;
    display: flex;
    justify-content: space-between;
    margin:0;
    padding:0;
`;
const Body = styled.b`
margin:0;
`;

const Item = styled.div`
    height: 5vw;
    left:0;
    width:100%;
    color: black;
    background-color: white;
    border-style: solid;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        background-color: blue !important;
    }
    // :focus{
    //     background-color: green;
    // }
    font-size: 1.3vw;
`;

const AddItemButton =styled.button`
    display: flex;
    justify-content: center;
    height:15vh;
    width: 50vw;
    font-size: 1.5vw;
    :hover{
        background-color: blue;
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


    // text-align: center;

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
    // border-weight: 50px;
    padding: 1vw 2vw 0 2vw; //top right bottom left clock wise
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;

    // opacity: .4;
    

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
    
    // position: sticky;
    // top: 0;
    // right: 0;
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
// width: 60%;
text-align: left;

opacity: .4;
display: flex;
justify-content: space-between;


`;


const SectItemContainer = styled.div`
    display: flex;
    flex-direction:  column;

`;

const Test = styled.div`
:hover{
    background-color: blue;
}
`;

const Item2 = styled.div`
    height: 3vw;
    width:50%;
    color: black;
    position:absolute;
    right=0px;
    bottom=0px;
    background-color: green;
    border-style: solid;
    display: flex;

    :hover{
        background-color: blue;
    }
`;


const ItemContainer = styled.div`
    height: 3vw;
    width:50%;
    color: black;
    background-color: green;
    border-style: solid;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    :hover{
        background-color: blue;
    }
`;
const SectionWrapperLeft = styled.div`
    display: flex;
    position:absolute;
    height: 100%;
    width: 50%;
    // background-color: pink;
    // opacity:.2;
    left:0px;
    top:0px;
    border-right: black solid 5px;
    overflow:hidden;

`;

const Section= styled.div`

`;
const SectionWrapperRight = styled.div`
    display: flex;
    position:absolute;
    height: 100%;
    width: 50%;
    // background-color: pink;
    // opacity:.2;
    right:0px;
    top:0px;


`;




const Form = styled.form`
    display: flex; /*inline*/
    
`;


const Input = styled.input`
    
width: 42.8vw; /* 47.8vw    49.7vw*/
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
`;



const Label = styled.div`
width: 6vw;
display: flex;
align-items: center;
`;









 
class TodoItems extends Component {



    constructor() {
        super();
        
        this.state = {
          clicked: true,

        };
      }


    createTasks(item, toggle, currentSection) {

        if (item.type=="Section"){
        return  <div key={item.key} currentSection= {item.Section}>
                <Item onClick={() => toggle(item.text,"Screaming HAOEFGNAERIU")} currentSectionA= {item.text}>{item.text}</Item>
                </div>
        }
        
        else if (item.type=="Item" && item.Section == currentSection) {
            return <Item currentSectionA= {item.text}>{item.text}</Item>
        }

        else {
            return <div></div>
        }
    };



    createSections(item, toggle, currentSection) {

        var activeColor = "white";
        if (currentSection == item.text){
            var activeColor = "green";
        }
        if (item.type=="Section"){
        return <div key={item.key} currentSection= {item.Section}>

        <Item type= "submit" onClick={() => toggle(item.text,"Screaming HAOEFGNAERIU")} currentSectionA= {item.text} style={{"background-color": activeColor}}>{item.text}</Item>

        </div>
        }

    };

  
    createItems(item, toggle, currentSection) {

        var activeColor = "white";
        if (currentSection == item.text){ //  !!!!!! make sure to come back and change current Section to currentItem and track the current item
            var activeColor = "green";
        }

        if (item.type=="Item" && item.Section == currentSection) {
            return <Item currentSectionA= {item.text}  style={{"background-color": activeColor}}  >
                        <SectItemContainer>
                            {item.text}
                            <div>
                                price: ${item.price}
                            </div>
                        </SectItemContainer>
                    </Item>

        }
    };

 
    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map((todoEntries,{toggleClass2}) => this.createTasks(todoEntries,this.props.toggleClass2,this.props.currentSection,this.props.type2Add));
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
 












class MenuSection extends Component {

    constructor(props) {
        super(props);
        
        this.state = {

            clicked: true,
            currentSection: null,
            currentType: null,
              

            Menu: this.props.Menu,
            items:  [
            ],

            "Items": [
                {
                    "title": "Chicken Over Rice",
                    "price": 12
                },
                {
                    "title": "Chicken Over Rice",
                    "price": 12
                }
            ],

            "MenuSection": [
                {
                    "Items": [
                        {
                            "title": "Chicken Over Rice",
                            "price": 12
                        },
                        {
                            "title": "aadadfae",
                            "price": 11423
                        },                        {
                            "title": "Ceaveaaa",
                            "price": 234
                        }
                    ],
                    "name": "Lunch Specials"
                },
                {
                    "Items": [
                        {
                            "title": "food",
                            "price": 200
                        }
                    ],
                    "name": "recipe challenged"
                },
                {
                    "Items": [
                        {
                            "title": "food2",
                            "price": 200342
                        }
                    ],
                    "name": "super recipe challenged"
                },

            ],
            arrayItems:  [
            ],

            Sections:[],
            
            selectedStyle:{"background-color": "white"},


            value: '',

            price: null,

            popUp: false,

            type2Add: null,

            errorMsg: ""


          };





        var index2 =0;

        for(var i = 0; i < this.state.Menu.MenuSection.length; i++){
            for(var j = 0; j < this.state.Menu.MenuSection[i].Items.length; j++){
            this.state.arrayItems[index2] = {text: this.state.Menu.MenuSection[i].Items[j].title,
                                        "price": this.state.Menu.MenuSection[i].Items[j].price,
                                        "Section": this.state.Menu.MenuSection[i].name,
                                        "type": "Item", 
                                    };
            index2++;
            };

        };

       
        for(var i = 0; i < this.state.Menu.MenuSection.length; i++){
            this.state.Sections[i] = {text:this.state.Menu.MenuSection[i].name,
                                     "type": "Section"
                                        };
            index2++;
            };



        this.toggleClass2 = this.toggleClass2.bind(this);

        this.addItem = this.addItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.itemInput = this.itemInput.bind(this);
        // this.Tester = this.Tester.bind(this);
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

              key: this.state.index2
            };

            if  (type== "Item")   {
                this.state.index2++
        
                this.setState((prevState) => {

                    return { 
                            arrayItems: prevState.arrayItems.concat(newItem) 
                    };

                });
            }




            else if  (type== "Section")   {
                    this.state.index2++
                    this.setState((prevState) => {
    
                        return { 
                            
                                Sections: prevState.Sections.concat(newItem) 
                        };
                    });
                }
            }



            
            e.preventDefault();
            this.setState({     value: "",
                                popUp: false,
                                price: ""        
            });


    };  
    
    toggleClass2(Section, screaming,Type) {
        

        if (this.state.Section !== null) {
            this.setState({ errorMsg:""})
        }
        const currentState = this.state.clicked;
        this.setState({ clicked: !currentState ,
                        currentSection: Section,
                        type2Add: Type}
                        , function () {
                            console.log("AAAAAAAAAAAAAAAAAA   " + this.state.currentSection);
                        }
                        
                        );
        
    };
    
    handleChange(event) {
        const target = event.target;
        const value = target.type
        this.setState({value: event.target.value});
      };
    
        
      handleChange2(event) {
        this.setState({price: event.target.price});
      };

      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      handleSubmit(event) {
 
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      };


    
    itemInput() {



        return(
            <PopUp>sdc
            <Form onSubmit={this.addItem}>
            <Input type="text" value={this.state.value} onChange={this.handleChange} popUpToggle= {this.popUpToggle} placeholder="enter task3"/>

          <AddButton type="submit">+</AddButton>
        </Form> 
        </PopUp>        
  
        );
    };


    Tester(){
        alert("Im an alert");
        return(
            <div>
            <div>test test test test test</div>        

            </div> 
        );
    };


    popUpToggle(type,Close){

        console.log("DDDDDDDDDDDDDDDDDDDDD" + type +"    "+this.state.type2Add)
        if (Close == true){
                this.setState({popUp: false});
                                      
        }
        else if (this.state.currentSection !== null || type == "Section"){

            if (type !== this.state.type2Add && this.state.type2Add !== null ){
            const popDisp = this.state.popUp;
                this.setState({ popUp: true, 
                                type2Add: type,
                                errorMsg:""}
                                , function () {
                                    console.log("BBBBBBBBBBBBBBBB1   " + this.state.popUp);
                                    console.log("EEEEEEEEEEEEEEEE   " + this.state.type2Add);
                                }
                            
                );            
            }



            else{
                const popDisp = this.state.popUp;
                this.setState({ popUp: !popDisp, 
                                type2Add: type,
                                errorMsg:""
                }
                , function () {
                    console.log("BBBBBBBBBBBBBBBB2   " + this.state.popUp);
                    console.log("EEEEEEEEEEEEEEEE   " + this.state.type2Add);
                }
                                
                );
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

        console.log("aolifnael");




     
      return (
          <AppWrapper>
       <SectionWrapperLeft>
           <Section>
    
                <AddItemButton onClick= {() => this.popUpToggle("Section")}>
                    <AddButtonTitle>Menu Sections</AddButtonTitle>
                        <Plus>+</Plus>
                </AddItemButton>

               {popDisplay}






              
                   <TodoItems entries={this.state.items}/>
      
                <TodoItems toggleClass2= {this.toggleClass2} entries={this.state.Sections} currentSection={this.state.currentSection}/>


           </Section>
       </SectionWrapperLeft>
       <SectionWrapperRight>
           <Section>

                <AddItemButton onClick= {() => this.popUpToggle("Item")}>
                    <AddButtonTitle>
                        <SectItemContainer>
                        Section Items
                        <div>{this.state.errorMsg}</div>
                        </SectItemContainer>
                    </AddButtonTitle> 
                    <Plus>+</Plus>
                </AddItemButton>

 
               {popDisplay}

                   <TodoItems entries={this.state.items}/>

 
                <TodoItems toggleClass2= {this.toggleClass2} entries={this.state.arrayItems} currentSection={this.state.currentSection} type2Add={this.state.type2Add} />



           </Section>
       </SectionWrapperRight>

       </AppWrapper>
      );
    }
  }
  
  export default MenuSection;
  


