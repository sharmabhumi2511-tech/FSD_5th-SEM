const products = document.getElementsByClassName("product")[0];

let productsData = [];

const getProductData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    productsData = data.products;

    productsData.map((product) => {

        const div = document.createElement("div");

        const img = document.createElement("img");
        img.src = product.thumbnail;
        img.alt = "product img here";

        const title = document.createElement("h1");
        title.innerText = product.title;

        const price = document.createElement("h2");
        price.innerText = `$${product.price}`;

        const incrementBtn = document.createElement("button");
        incrementBtn.innerText = "+";

        const decrementBtn = document.createElement("button");
        decrementBtn.innerText = "-";

        const span = document.createElement("span");
        span.innerText = "ADD";

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(decrementBtn);
        div.appendChild(span);
        div.appendChild(incrementBtn);

        products.appendChild(div);

        let counter = 0;

        incrementBtn.addEventListener("click", () => {

            counter++;

            span.innerText = counter;

            // Pehle localStorage se existing cart nikalo
            let cart = JSON.parse(localStorage.getItem("product")) || [];

            // Check karo product already cart me hai ya nahi
            const existingProduct = cart.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {

                // Agar already hai to quantity increase karo
                existingProduct.quantity = counter;

            } else {

                // Naya product cart me add karo
                cart.push({
                    id: product.id,
                    image: product.thumbnail,
                    title: product.title,
                    price: product.price,
                    quantity: counter
                });
            }

            // Updated cart save karo
            localStorage.setItem("product", JSON.stringify(cart));
        });


        decrementBtn.addEventListener("click", () => {

            if (counter > 0) {
                counter--;
            }

            span.innerText = counter;

            let cart = JSON.parse(localStorage.getItem("product")) || [];

            const existingProduct = cart.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {

                existingProduct.quantity = counter;

                // Quantity 0 ho gayi to cart se remove
                if (counter === 0) {
                    cart = cart.filter(
                        (item) => item.id !== product.id
                    );
                }

                localStorage.setItem(
                    "product",
                    JSON.stringify(cart)
                );
            }
        });

    });
};

getProductData();