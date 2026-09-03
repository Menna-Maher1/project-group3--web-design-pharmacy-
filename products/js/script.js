var categories = document.querySelectorAll(".category-title");

categories.forEach(function(category) {

    category.addEventListener("click", function() {

        var options = category.nextElementSibling;
        var arrow = category.querySelector(".arrow i");

        if (options.style.display === "block") {

            options.style.display = "none";

            arrow.classList.remove("fa-chevron-down");
            arrow.classList.add("fa-chevron-right");

        } else {

            options.style.display = "block";

            arrow.classList.remove("fa-chevron-right");
            arrow.classList.add("fa-chevron-down");

        }

    });

});

let cartItems = 0;

const addCartBtns = document.querySelectorAll(".add-cart-btn");
const cartCount = document.getElementById("cartCount");

addCartBtns.forEach(function (btn) {

    btn.addEventListener("click", function (e) {

        e.preventDefault();

        cartItems++;

        cartCount.textContent = cartItems;

    });

});


let emailValidation = (element) => {
    if (element.value.includes("@")) {
        console.log("Valid Email");
    } else {
        console.log("Invalid Email");
    }
};
let myForm = document.getElementById("myForm");

myForm.addEventListener("input", (e) => {
    if (e.target.id == "userEmail") {
        emailValidation(e.target);
    }
});
var subscribeBtn = document.getElementById("subscribeBtn");
var userEmail = document.getElementById("userEmail");
subscribeBtn.addEventListener("click",()=>{
    if(userEmail.value.trim()===""){
    alert("please enter your email");
}
    else{
        alert("done");
    }
});