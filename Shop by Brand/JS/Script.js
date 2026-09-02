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