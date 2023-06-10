import React from "react";
import ReactDOM from "react-dom/client";
/*
<div id="parent">
   <div id="child">
      <h1>I'm h1 tag</h1>
      <h2>i'm h2 tag</h2>
   </div>
</div>
*/

// const heading= React.createElement("h1",
// {id: "heading",abc: "xyz"},
// "Hello world  from React!!");
  const parent= React.createElement("div",
  {id: "parent"},
  React.createElement("div",
  {id: "child"},
     [React.createElement("h1",{id: "heading"},"im h1 tag"),React.createElement("h2",{},"i'm h3 tag")]
   ) 
  );

    const root= ReactDOM.createRoot(document.getElementById("root"));
    //console.log(heading);
    //root.render(heading);
    root.render(parent);