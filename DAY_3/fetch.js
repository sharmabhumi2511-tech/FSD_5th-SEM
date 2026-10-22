const getProduct = async () =>{
    const res = await fetch("https://dummyjson.com/products");
    console.log(res);
    const data = await res.json();
    console.log(data);
}
getProduct();