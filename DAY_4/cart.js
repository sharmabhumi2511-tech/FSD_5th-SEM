const cartProduct = document.getElementById("cart-products");

const showProduct = () => {

    let cart = JSON.parse(localStorage.getItem("product")) || [];

    cartProduct.innerHTML = "";

    cart.map((product) => {

        const div = document.createElement("div");

        // Image
        const img = document.createElement("img");
        img.src = product.image;
        img.alt = "product img here";

        // Title
        const title = document.createElement("h1");
        title.innerText = product.title;

        // Price
        const price = document.createElement("h2");
        price.innerText = `$${product.price}`;

        // Minus button
        const decrementBtn = document.createElement("button");
        decrementBtn.innerText = "-";

        // Quantity
        const span = document.createElement("span");
        span.innerText = product.quantity;

        // Plus button
        const incrementBtn = document.createElement("button");
        incrementBtn.innerText = "+";


        // HTML me add karo
        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);

        div.appendChild(decrementBtn);
        div.appendChild(span);
        div.appendChild(incrementBtn);

        cartProduct.appendChild(div);


        // PLUS
        incrementBtn.addEventListener("click", () => {

            product.quantity++;

            localStorage.setItem(
                "product",
                JSON.stringify(cart)
            );

            showProduct();
        });


        // MINUS
        decrementBtn.addEventListener("click", () => {

            if (product.quantity > 1) {

                product.quantity--;

            } else {

                // quantity 1 se 0 hone par cart se remove
                cart = cart.filter(
                    (item) => item.id !== product.id
                );
            }

            localStorage.setItem(
                "product",
                JSON.stringify(cart)
            );

            showProduct();
        });

    });
};

showProduct();