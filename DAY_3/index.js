
 const showData = ()=> {
    const btn = document.getElementById("btn");
       const productDiv =  document.getElementById("products").innerText = data.titile;


    const res = await fetch("https://dummyjson.com/products");

    const data = await res.json();
    const prodcuts =  data.products;

    products.map((data)=>{
        const product = document.createElement("div");
        product.innerText = data.titile
    })

   
}