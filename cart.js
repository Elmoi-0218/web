/*************** CART ***************/
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    cart.push(product);
    saveCart();
    alert("Producto agregado al carrito");
}

const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

function renderCart() {
    if (!cartItems || !cartTotal) return;

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        cartItems.innerHTML += `
            <div class="cart-item">
                ${item.name} - $${item.price}
                <button onclick="removeFromCart(${index})">✖</button>
            </div>
        `;
    });

    cartTotal.textContent = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
}

renderCart();
