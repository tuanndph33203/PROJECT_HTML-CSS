const imageList = document.querySelectorAll(".image__item");
const mainImage = document.getElementById("image");

imageList.forEach(item => {
    item.addEventListener('click', function () {
        mainImage.src = this.src;
    });
});
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const quantityElement = document.getElementById("quantity");
minusButton.addEventListener('click', function() {
    let currentQuantity = parseInt(quantityElement.textContent);
    if (currentQuantity > 0) {
        currentQuantity--;
        quantityElement.textContent = currentQuantity;
    }
});
plusButton.addEventListener('click', function() {
    let currentQuantity = parseInt(quantityElement.textContent);
    currentQuantity++;
    quantityElement.textContent = currentQuantity;
});
