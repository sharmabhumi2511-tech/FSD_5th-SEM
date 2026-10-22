const root = ReactDOM.createRoot(document.getElementById("root"));

const HeaderComponent = () =>{
    return (
        <div style={{textAlign: "center" , backgroundColor:"lightgreen" , width: "100%" }}><h1>E-Commerce WEbpage</h1></div>
    );
}
const ProductCompoenent = () =>{
    return (
        <div id="prod-container">
            <div id="products">Product-01</div>
            <div id="products">Product-02</div>
            <div id="products">Product-03</div>
            <div id="products">Product-04</div>
            <div id="products">Product-05</div>
            <div id="products">Product-06</div>
        </div>
    )
}
const FooterComponent = () =>{
    return (
        <div><h1>copyright all rihgt are reserved</h1></div>

    );
}
const reactElement = <>
<HeaderComponent />
<ProductCompoenent />
<FooterComponent />

</>;
root.render(reactElement);