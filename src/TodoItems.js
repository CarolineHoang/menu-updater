// import React, { Component } from "react";
// import styled from "styled-components";


// const Item = styled.button`
//     height: 3vw;
//     color: black;
//     background-color: green;
//     border-style: solid;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     :hover{
//         background-color: blue;
//     }
// `;

 
// class TodoItems extends Component {



//     constructor() {
//         super();
        
//         this.state = {
//           clicked: true
//         };
        
//         this.toggleClass = this.toggleClass2.bind(this);
//         console.log("hey something is here!!!!!!!!");
//       }
//       handleClick() {
//         console.log('whaaaaa');}

//     toggleClass2() {
//         const currentState = this.state.clicked;
//         this.setState({ clicked: !currentState });
//         console.log("hey something is here!!!!!!!!");
//     };
      




//   createTasks(item) {
//     return <li key={item.key}>
//     <Item currentSectionA= {item.text}>{item.text}</Item>
    
//     </li>
//   };
 
//   render() {
//     var todoEntries = this.props.entries;
//     var listItems = todoEntries.map(this.createTasks);
 
//     return (
//       <ul className="theList">
//       <div onClick={this.handleClick} >
//           {listItems}
//           </div>
//       </ul>
//     );
//   }
// };
 
// export default TodoItems;