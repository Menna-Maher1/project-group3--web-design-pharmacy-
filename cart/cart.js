document.addEventListener("DOMContentLoaded", function () {

  var discount = 60.00;
  var tax = 14.00;

  var cartList = document.getElementById("cartItemsList");
  var subtotalValue = document.getElementById("subtotalValue");
  var totalValue = document.getElementById("totalValue");
  var removeAllBtn = document.getElementById("removeAllBtn");
  var applyCouponBtn = document.getElementById("applyCouponBtn");
  var couponInput = document.getElementById("couponInput");

  function formatMoney(amount) {
    return "Rs. " + amount.toFixed(2);
  }

  function recalculateTotals() {
    var rows = cartList.querySelectorAll(".cart-row");
    var subtotal = 0;

    rows.forEach(function (row) {
      var pricePerUnit = parseFloat(row.getAttribute("data-price"));
      var qtySelect = row.querySelector(".qty-input");
      var quantity = parseInt(qtySelect.value, 10);
      subtotal += pricePerUnit * quantity;
    });

    var total = subtotal - discount + tax;

    subtotalValue.textContent = formatMoney(subtotal);
    totalValue.textContent = formatMoney(total);
  }

  function bindQuantityChange(row) {
    var qtySelect = row.querySelector(".qty-input");
    qtySelect.addEventListener("change", recalculateTotals);
  }

  function bindRemoveButton(row) {
    var removeLink = row.querySelector(".remove-item");
    removeLink.addEventListener("click", function (event) {
      event.preventDefault();
      row.remove();
      recalculateTotals();
    });
  }

  cartList.querySelectorAll(".cart-row").forEach(function (row) {
    bindQuantityChange(row);
    bindRemoveButton(row);
  });

  removeAllBtn.addEventListener("click", function (event) {
    event.preventDefault();
    cartList.innerHTML = "";
    recalculateTotals();
  });

  applyCouponBtn.addEventListener("click", function () {
    var code = couponInput.value.trim();

    if (code === "") {
      couponInput.classList.add("is-invalid");
      return;
    }

    couponInput.classList.remove("is-invalid");
    couponInput.classList.add("is-valid");
    couponInput.disabled = true;
    applyCouponBtn.textContent = "Applied";
    applyCouponBtn.disabled = true;
  });

  document.querySelectorAll(".add-to-cart-btn").forEach(function (button) {
    if (button.disabled) {
      return;
    }
    button.addEventListener("click", function () {
      var originalIcon = button.innerHTML;
      button.innerHTML = '<i class="fa-solid fa-check"></i>';
      setTimeout(function () {
        button.innerHTML = originalIcon;
      }, 1200);
    });
  });

  recalculateTotals();
});
document.addEventListener('DOMContentLoaded', function () {
  const subscribeBtn = document.querySelector('.join .btn-primary');
  const emailInput = document.querySelector('.join input[type="email"]');

  if (subscribeBtn && emailInput) {
    subscribeBtn.addEventListener('click', function () {
      if (emailInput.value.trim() === '') {
        alert('please enter your email');
      } else {
        alert('please enter your email');
      }
    });
  }
});