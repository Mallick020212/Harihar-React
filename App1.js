
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

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child", key: "child" }, [
//     React.createElement("h1", { key: "h1a",id:"heading" }, "hello h1 tag"),
//     React.createElement("h2", { key: "h2a",id:"heading" }, "hello Harihar")
//   ]),
//   React.createElement("div", { id: "child1", key: "child1" }, [
//     React.createElement("h1", { key: "h1b",id:"heading" }, "hello h1 tag"),
//     React.createElement("h2", { key: "h2b",id:"heading" }, "hello h2 tag")
//   ])
// ]);

/// React Elemet
// const parent= ( <div>

//   <h1 id="heading" className="h1tag"> Hellow react js this is Harihar Mallick</h1>
//   <h1 id="heading" className="h1tag"> Hellow react js this is Harihar Mallick</h1>

// </div>
// );

// functinal componet
// functional componet is just javascript function which return the pices of jsx element or react element 
// always start with componet name in capital letter 
  // const Title=()=>(
  //   <h1 id="heading">Hello this is title componet</h1>
  // );
  // const HeadingComponet=()=>(
  //     <div>
  //       <Title/>
  //         <h2 className="heading" id="heading">Hello this is functional componet</h2>
  //     </div>
  // );


   const title=( <h1 id="heading">Hello this is title componet</h1>);
  const HeadingComponet=()=>(
      <div>
        {title}
          <h2 className="heading" id="heading">Hello this is functional componet</h2>
      </div>
  );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponet/>);
 