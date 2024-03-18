const price = document.getElementById("price");
const currentPrice = parseInt(price.textContent); 
price.textContent = formatPrice(currentPrice); 

const quantity = document.getElementById("quantity");
const subProduct = document.getElementById("sub");
const subTotals = document.getElementById("sub-price");
const totals = document.getElementById("total-price");

function updatePrices() {
    const subtotal = currentPrice * quantity.value;
    subProduct.textContent = formatPrice(subtotal);
    subTotals.textContent = formatPrice(subtotal);
    totals.textContent = formatPrice(subtotal);
}

quantity.addEventListener("change", updatePrices);
updatePrices();

function formatPrice(amount) {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(amount);
}

