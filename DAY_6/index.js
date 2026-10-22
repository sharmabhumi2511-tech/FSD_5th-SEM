
// const h1 = React.createElement("h1" ,{},"Welcome to the FSD class"); {} empy means no id no classs, 
// [] iske andr uske child elements , or starting me uska tag ki h1 hai ya div ya else



    // ---------W/O jsx . or npm------



const root = ReactDOM.createRoot(document.getElementById("root"));

// Without JSX
const divElement = React.createElement("div", {}, [
    React.createElement("div", { id: "inner-div-1" }, [
        React.createElement("span", {}, "01"),
        React.createElement("span", {}, "01"),
        React.createElement("span", {}, "01"),
        React.createElement("span", {}, "01"),
    ]),

    React.createElement("div", { id: "inner-div-2" }, [
        React.createElement("span", {}, "02"),
        React.createElement("span", {}, "02"),
        React.createElement("span", {}, "02"),
        React.createElement("span", {}, "02"),
    ])
]);


// With JSX + Babel
const BabelKbad = (
    <div className="outer">
        <div className="inner">
            <span>Span 1</span>
            <span>Span 2</span>
            <span>Span 3</span>
            <span>Span 4</span>
        </div>

        <div className="inner">
            <span>Span 5</span>
            <span>Span 6</span>
            <span>Span 7</span>
            <span>Span 8</span>
        </div>
    </div>
);

root.render(BabelKbad);