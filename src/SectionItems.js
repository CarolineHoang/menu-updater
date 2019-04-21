import React, { Component } from 'react';

import styled from "styled-components";
import TodoItems from "./TodoItems";


const SectionWrapperLeft = styled.div`
    display: flex;
    position:absolute;
    height: 100%;
    width: 50vw;
    background-color: pink;
    opacity:.2;
    left:0px;

`;

const Section= styled.div`

`;
const SectionWrapperRight = styled.div`
    display: flex;
    position:absolute;
    height: 100%;
    width: 50vw;
    background-color: pink;
    opacity:.2;
    right:0px;

`;




const Form = styled.form`
    display: flex; /*inline*/
    
`;


const Input = styled.input`
    
width: 42.8vw; /* 47.8vw    49.7vw*/
height: 4vw;
font-size: 1.5vw;
padding-left: 2vw;
::placeholder {
    font-size: 1.5vw;
    color:black;
}
`;

const AddButton = styled.button`
width: 5vw;
`;



class SectionItems extends Component {

    constructor(props) {
        super(props);
        this.state = {

            Menu: this.props.Menu,
            items:  [
            ],
            items2:  [{text:"ASDfa",key: Date.now()}
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

            Sections:[]
          };

          console.log("ewetzxg65", this.state.MenuSection[0].Items[0].title);  
          
          for(var i = 0; i < this.state.Items.length; i++){
            this.state.Items[i]= {text: this.state.Items[i].title,
                                "price": this.state.Items[i].price
                };
            };  


            // var index =0;
            // for(var i = 0; i < this.state.MenuSection.length; i++){
            //     for(var j = 0; j < this.state.MenuSection[i].Items.length; j++){
            //     this.state.arrayItems[index] = {text: this.state.MenuSection[i].Items[j].title,
            //                                 "price": this.state.MenuSection[i].Items[j].price, };
            //     this.state.MenuSection[i].Items[j]= {text: this.state.MenuSection[i].Items[j].title,
            //                                         "price": this.state.MenuSection[i].Items[j].price,                                
            //         };
            //     index++;
            //     };
    
            // };


        // var index2 =0;        
        // for(var i = 0; i < this.state.Menu.MenuSection.length; i++){
        //     for(var j = 0; j < this.state.Menu.MenuSection[i].Items.length; j++){
        //     this.state.arrayItems[index2] = {text: this.state.Menu.MenuSection[i].Items[j].title,
        //                                 "price": this.state.Menu.MenuSection[i].Items[j].price, };
        //     this.state.Menu.MenuSection[i].Items[j]= {text: this.state.Menu.MenuSection[i].Items[j].title,
        //                                         "price": this.state.Menu.MenuSection[i].Items[j].price,                                
        //         };
        //     index2++;
        //     };

        var index2 =0;        
        for(var i = 0; i < this.state.Menu.MenuSection.length; i++){
            for(var j = 0; j < this.state.Menu.MenuSection[i].Items.length; j++){
            this.state.arrayItems[index2] = {text: this.state.Menu.MenuSection[i].Items[j].title,
                                        "price": this.state.Menu.MenuSection[i].Items[j].price, };
            // this.state.Menu.MenuSection[i].Items[j]= {text: this.state.Menu.MenuSection[i].Items[j].title,
            //                                     "price": this.state.Menu.MenuSection[i].Items[j].price,                                
            //     };
            index2++;
            };



            // this.state.MenuSection[i][i]  
        };

       
        for(var i = 0; i < this.state.Menu.MenuSection.length; i++){
            this.state.Sections[i] = {text:this.state.Menu.MenuSection[i].name};
  
            };
            // this.state.MenuSection[i][i]  
           


          this.state.items2[2]={text:"ASDfazdfs",key: Date.now()+2};
          this.state.items2[3]={text:"soemthing",key: Date.now()+1};
        //   this.state.items2[Date.now()]="ASDfazdfs";
          this.state.trial = 3;   


          console.log("ewetzxg65", this.state.MenuSection[0].Items);  

          console.log("ujycvj", this.state.Items);  

        this.addItem = this.addItem.bind(this);

        console.log("aaaaaaaaaa",this.state.Menu.MenuSection.length);
        console.log(this.state.arrayItems);
        console.log("hello");
        console.log(this.state.items2);
        console.log(this.state.items2[Date.now()]="ASDfazdfs");
    }

    addItem(e) {
        var FirstItem =  {
            // text: FirstItem.title,
            text: this._inputElement.value,
            "title": "Chicken Over Rice",
            "price": 12,
            key: Date.now()
        };
        if (this._inputElement.value !== "") {
            var newItem = {
              text: this._inputElement.value,
              key: Date.now()
            };
         
            this.setState((prevState) => {
                if (this.state.items == []) {
                    console.log("the if works");
                    return { 
                        items: prevState.items.concat(FirstItem) 
                      };
                }
                else {
                    console.log("the else works");
                    return { 
                        items: prevState.items.concat(FirstItem) 
                      };
                }

            });
           
            this._inputElement.value = "";
          }
          console.log(FirstItem);
        //   console.log(items);
          console.log(FirstItem.title);
          console.log("hello");
          console.log(this.state.trial);
          console.log("test test test", this.state.items[0],"Asdf");
          console.log("test1 test1 test1", this.state.items[1],"Asdf");
          console.log("test2 test2 test2", this.state.items[3],"Asdf");
          console.log(this.state.items[0],"Asdf");
          console.log(this.state.items[0]);
          console.log(this.state.key);
             
          e.preventDefault();
        
    }   
    
    
    render() {
      return (
          <div>

       <SectionWrapperRight>
           <Section>
           
               <Form onSubmit={this.addItem}>
                   <Input ref={(ac) => this._inputElement = ac}  placeholder="enter task"/>
                   <AddButton type="submit">+</AddButton>

               </Form>
               
               <TodoItems entries={this.state.items}/>
               {/* <TodoItems entries={this.state.items2}/>
               <TodoItems entries={this.state.Items}/>

               <TodoItems entries={
                   this.state.MenuSection[1].Items}/> */}

                <TodoItems entries={this.state.arrayItems}/>

           </Section>
       </SectionWrapperRight>

       </div>
      );
    }
  }
  
  export default SectionItems;