/*
<div id="parent">
    <div id="child>
        <h1><h1>
    </div>"

</div>

 */










// const heading = React.createElement("h1", {id: "heading"}, "Hello world from react here you are going to learn react");
 
// const root = ReactDOM.createRoot(document.getElementById("root"));
 
// root.render(heading);

const parent = React.createElement("div",{id: "parent"}, 
    [[React.createElement("div",{id: "child1"}, 
        [React.createElement("h1",{id: "heading"}, "I am heading"), React.createElement("h2",{id: "heading2"}, "I am heading 2")])],[React.createElement("div",{id: "child2"}, 
            [React.createElement("h1",{id: "heading"}, "I am heading"), React.createElement("h2",{id: "heading2"}, "I am heading 2")])]]);

const root = ReactDOM.createRoot(document.getElementById("header"));

root.render(parent);

console.log(parent);


//JSX 