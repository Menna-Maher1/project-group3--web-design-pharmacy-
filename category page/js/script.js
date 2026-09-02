document.addEventListener("DOMContentLoaded", function () {
    // 1. تفاعل تبديل أيقونة السهم لفتح وغلق قائمة Medicines
    const medicinesToggle = document.querySelector("[data-bs-toggle='collapse']");
    const subMenu = document.getElementById("medicinesSubMenu");

    if (medicinesToggle && subMenu) {
        subMenu.addEventListener("show.bs.collapse", function () {
            const icon = medicinesToggle.querySelector("i");
            if (icon) {
                icon.classList.remove("fa-chevron-right");
                icon.classList.add("fa-chevron-down");
            }
        });
        
        subMenu.addEventListener("hide.bs.collapse", function () {
            const icon = medicinesToggle.querySelector("i");
            if (icon) {
                icon.classList.remove("fa-chevron-down");
                icon.classList.add("fa-chevron-right");
            }
        });
    }

    // 2. تفاعل زر See all للماركات
    const seeAllBtn = document.getElementById("seeAllBrands");
    if (seeAllBtn) {
        seeAllBtn.addEventListener("click", function (e) {
            e.preventDefault();
            console.log("See all brands clicked");
        });
    }

    // 3. تفاعل قائمة الترتيب (Sort By)
    const sortDropdownItems = document.querySelectorAll(".dropdown-item[data-sort]");
    const sortDropdownBtn = document.getElementById("sortDropdown");

    sortDropdownItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const selectedSort = this.getAttribute("data-sort");
            const selectedText = this.textContent;
            
            if (sortDropdownBtn) {
                sortDropdownBtn.textContent = selectedText;
            }
            
            sortDropdownItems.forEach(i => i.classList.remove("active"));
            this.classList.add("active");
            
            console.log("Sorting by:", selectedSort);
        });
    });

    // 4. تفاعل تبديل العرض (Grid / List)
    const viewToggleBtns = document.querySelectorAll(".view-toggle");
    const productContainer = document.querySelector('.product-grid'); 

    viewToggleBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            viewToggleBtns.forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            const selectedView = this.getAttribute("data-view");

            if (productContainer) {
                if (selectedView === 'list') {
                    productContainer.classList.add('list-view-layout'); 
                } else {
                    productContainer.classList.remove('list-view-layout');
                }
            }
        });
    });
});

// 5. دالة السلة العامة (خارج DOMContentLoaded لكي يتعرف عليها onclick في الـ HTML)
let cartCount = 0;

function addToCart() {
    cartCount++;
    const cartBadge = document.getElementById("cart-count");
    if (cartBadge) {
        cartBadge.textContent = cartCount;
    }
}