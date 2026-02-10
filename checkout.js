/*************** CHECKOUT ***************/
const checkoutTotal = document.getElementById("checkoutTotal");
const payBtn = document.getElementById("payBtn");

const cart = JSON.parse(localStorage.getItem("cart")) || [];

if (checkoutTotal) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    checkoutTotal.textContent = total;
}

if (payBtn) {
    payBtn.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("El carrito está vacío");
            return;
        }

        alert("Pago realizado con éxito ✅");
        localStorage.removeItem("cart");
        window.location.href = "index.html";
    });
}
