/* import React from "react";
import ReactDOM from "react-dom/client";

<div id="parent">
   <div id="child">
      <h1>I'm h1 tag</h1>
      <h2>i'm h2 tag</h2>
   </div>
</div>

 const heading= React.createElement("h1",
 {id: "heading",abc: "xyz"},
 "Hello world  from React!!");
   const parent= React.createElement("div",
   {id: "parent"},
  React.createElement("div",
   {id: "child"},
      [React.createElement("h1",{id: "heading"},"im h1 tag"),React.createElement("h2",{},"i'm h3 tag")]
   ) 
   );

    const root= ReactDOM.createRoot(document.getElementById("root"));
    console.log(heading);
    root.render(heading);
     root.render(parent);
   

//React element => Object => HTMLElement(render)

//const heading = React.createElement("h1",{id:"heading"},"Namaste React");
//console.log(heading);
//JSX
const heading= (<h1  className="head">
   Namaste React Using JSX
   </h1>);

//React Component
//Class Based COmponent- OLD
//Functional Component- NEW

const Title =() => (
   <h1 className="head" tabIndex="5">
      Namaste React using JSX
   </h1>
);
const number= 10;
const HeadingComponent= ()=>(
   <div id="container">
      <Title />
      //<Title></Title>
     //{Title()} we can call as well
      {number}
     <h1>Namaste React Functional Component</h1>
   </div>);

// const HeadingComponent2= ()=> (<h1 className="heading">
//    Namaste React Functional Component</h1>);
//header Component

const Header = () => {
   return (
  <>
    <div id="container">
      <header id="headerLogo">
        <div id="logoImg">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png" 
           alt="ichatGpt"
           style={{ float: 'left' }}
           /> 
           <form>
            <input type="text" placeholder="search" />
            </form>
        </div>
        <div>
         <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" style={{ float: 'right' }}/>
        </div>
      </header>
    </div>
  </>
);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
//render react element
//root.render(heading);
//render component
//root.render(<HeadingComponent />)
root.render(<Header />);
*/