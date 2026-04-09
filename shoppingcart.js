const cartCount = document.querySelector(".icon-cart span");
const addButtons = document.querySelectorAll(".add-to-cart-btn");

let count = parseInt(localStorage.getItem("cartCount"), 10) || 0;

cartCount.textContent = count;
addButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const select = button.closest(".product-row").querySelector("select");
        const amount = parseInt(select.value, 10);

        count += amount;
 
        cartCount.textContent = count;

        localStorage.setItem("cartCount", count);
    });
});