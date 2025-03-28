const favCounter = document.querySelector(".count_favourite");
const cartCounter = document.querySelector(".count_item_header");

let favCount = 0;
let cartCount = 0;


document.getElementById("category").addEventListener("change", function () {
    let selectedCategory = this.value.trim().toLowerCase(); 
    let products = document.querySelectorAll(".product");  

    products.forEach(product => {
        let productCategory = product.getAttribute("data-category")?.trim().toLowerCase();

        
        if (selectedCategory === "all products" || selectedCategory === productCategory) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});


document.querySelectorAll(".fav-btn").forEach(button => {
    button.addEventListener("click", function () {
        let icon = this.querySelector("i");

        if (!icon.classList.contains("liked")) {
            icon.classList.add("fa-solid", "liked");
            favCount++;
        } else {
            icon.classList.remove("fa-solid", "liked");
            favCount--;
        }

        favCounter.textContent = favCount;
    });
});


document.querySelectorAll(".cart-btn").forEach(button => {
    button.addEventListener("click", function () {
        let icon = this.querySelector("i");

        if (!icon.classList.contains("added-to-cart")) {
            icon.classList.add("added-to-cart");
            cartCount++;
        } else {
            icon.classList.remove("added-to-cart");
            cartCount--;
        }

        cartCounter.textContent = cartCount;   
    });
});