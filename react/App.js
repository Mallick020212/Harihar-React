
/// Here createElement is object and the react object becomes html that browser understand 

/**
 *   <div id="parent">
 *       <div id="child">
 *         <h1> Hello i am h1 tag</h1>
 *         <h2> Hello i am h2 tag</h2>
 *       </div>
 *       <div id="chil2">
 *         <h1> Hello i am h1 tag</h1>
 *         <h2> Hello i am h2 tag</h2>
 *       </div>
 *   </div>
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


// const heading = React.createElement("h1", {id:"heading"}, "Hello world React JS");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "child" }, [
    React.createElement("h1", { key: "h1a",id:"heading" }, "hello h1 tag"),
    React.createElement("h2", { key: "h2a",id:"heading" }, "hello Harihar")
  ]),
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { key: "h1b",id:"heading" }, "hello h1 tag"),
    React.createElement("h2", { key: "h2b",id:"heading" }, "hello h2 tag")
  ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
 