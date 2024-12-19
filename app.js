// const heading = React.createElement("h1", {}, "hello wolrd from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const parent = React.createElement(
    "div",
     {id: "parent"}, 
    React.createElement(
        "div",
         {id: "child"},
         React.createElement("h1", {}, "im the h1 tag")
    )
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);