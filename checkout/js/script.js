// JS Code - Billing Form Handler

var billingForm = document.getElementById('billingForm')
var firstNameInput = document.getElementById('firstName')
var emailInput = document.getElementById('emailAddress')
var sameAddressCheck = document.getElementById('sameAddressCheck')

// Function to collect form data
var getBillingData = () => {
    var userData = {
        firstName: firstNameInput.value,
        email: emailInput.value,
        isSameAddress: sameAddressCheck.checked
    }
    return userData
}

// Event listener using traditional style
sameAddressCheck.addEventListener('change', () => {
    if(sameAddressCheck.checked) {
        console.log("Addresses are the same")
    } else {
        console.log("Addresses are different")
    }
})

var formDataSummary = getBillingData()
console.log(formDataSummary)

var ccCheck = document.getElementById('ccCheck');
var codCheck = document.getElementById('codCheck');
var creditCardContainer = document.getElementById('creditCardContainer');

function updatePaymentStyle() {
    if (ccCheck && ccCheck.checked) {
        creditCardContainer.classList.add('border-primary', 'bg-light');
    } else {
        creditCardContainer.classList.remove('border-primary', 'bg-light');
    }
}

// دالة التشغيل عند حدوث تغيير (Click / Change)
if (ccCheck) ccCheck.addEventListener('change', updatePaymentStyle);
if (codCheck) codCheck.addEventListener('change', updatePaymentStyle);

// تشغيل أزرار زيادة ونقصان الكمية
document.querySelectorAll('.card').forEach(card => {
    card.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            let span = this.parentElement.querySelector('span');
            if (span && !isNaN(span.innerText)) {
                let currentVal = parseInt(span.innerText);
                if (this.innerText === '+' ) {
                    span.innerText = currentVal + 1;
                } else if (this.innerText === '-' && currentVal > 1) {
                    span.innerText = currentVal - 1;
                }
            }
        });
    });

    // تشغيل أيقونة حذف المنتج عند الضغط على X
    card.querySelectorAll('.fa-xmark').forEach(icon => {
        icon.addEventListener('click', function() {
            // يقوم بحذف عنصر المنتج بالكامل عند الضغط على علامة الخطأ
            let itemRow = this.closest('.border-bottom') || this.closest('.d-flex.align-items-center.justify-content-between');
            if (itemRow) {
                itemRow.remove();
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // كود بسيط لطريقة تفاعل زر إزالة الضمان وتحديث الحسابات لو حابة تطوريه بideass بتاعتك
    const removeWarrantyBtn = document.getElementById("removeWarranty");
    if (removeWarrantyBtn) {
        removeWarrantyBtn.addEventListener("click", function (e) {
            e.preventDefault();
            const warrantyRow = this.closest(".d-flex.justify-content-between");
            if (warrantyRow) {
                warrantyRow.style.transition = "all 0.3s ease";
                warrantyRow.style.opacity = "0";
                setTimeout(() => warrantyRow.remove(), 300);
            }
        });
    }
});