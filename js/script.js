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