const root = ReactDOM.createRoot(document.getElementById("root"));
const getProductData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
  
    return data.products;
}
getProductData();
const HeaderComponent = () => {
    return (
        <div className="header">
            <h1 style={{fontSize: "3.5rem" , color:"white" , textAlign: "center"}}>E-commerce Webpage</h1>
        </div>
    )
}

const ProductComponent = ({products})=>{
    console.log(products)
    return (
        <>
    <div id="products">
        {products.map((product) =>
             <div className="product">
            <img className="img" src={product.thumbnail} />
            <h1 style={{textAlign: "center" }} >{product.title}</h1>
            </div>
        )}
    
    </div>

        </>
    )
}

const FooterElement = ()=>{
    return (
        <>
        <div className="footer">
            <h1>This side for footer</h1>
        </div>
        </>
    )
}

 

const App =async  ()=>{
    let products = await getProductData();
    const reactElement = <>
     <HeaderComponent />
                        <ProductComponent  products={products} />
                        <FooterElement />
    </>

    root.render(reactElement);
}
App();