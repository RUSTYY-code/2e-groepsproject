
const cartCount = document.querySelector(".icon-cart span");

const addButtons = document.querySelectorAll(".add-to-cart-btn");

let count = 0;

addButtons.forEach((button) => {
    button.addEventListener("click", () => {    

        const select = button.closest(".product-row").querySelector("select");
        const amount = parseInt(select.value);

        count += amount;

        cartCount.textContent = count;
    });
});