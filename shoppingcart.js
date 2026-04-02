
const cartCount = document.querySelector(".icon-cart span");

const addButtons = document.querySelectorAll(".add-to-cart-btn");

// Startwaarde
let count = 0;

addButtons.forEach((button) => {
    button.addEventListener("click", () => {

        // Zoek het select-element in dezelfde product-row
        const select = button.closest(".product-row").querySelector("select");
        const amount = parseInt(select.value);

        // Tel het aantal erbij
        count += amount;

        cartCount.textContent = count;
    });
});