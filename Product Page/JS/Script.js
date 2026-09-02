let quantity = 1;
const quantityValue = document.getElementById("quantityValue");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
plusBtn.addEventListener("click", function () {
    quantity++;
    quantityValue.textContent = quantity;
});
minusBtn.addEventListener("click", function () {
    if (quantity > 1) {
        quantity--;
        quantityValue.textContent = quantity;
    }
});

let cartItems = 0;
const addCartBtn = document.querySelector(".add-cart-btn");
const cartCount = document.getElementById("cartCount");
addCartBtn.addEventListener("click", function () {
    cartItems += quantity;
    cartCount.textContent = cartItems;
});

const newsletterForm = document.getElementById("newsletterForm");
const emailInput = document.getElementById("emailInput");
const message = document.getElementById("message");
newsletterForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (emailInput.value !== "") {
        let emails = JSON.parse(localStorage.getItem("emails")) || [];
        emails.push(emailInput.value);
        localStorage.setItem("emails", JSON.stringify(emails));
        message.textContent = "Thank you for subscribing!";
        message.style.color = "#08708c";
        emailInput.value = "";
    }
});