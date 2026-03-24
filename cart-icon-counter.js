const plantAdd = document.querySelector('.cartButton');
        const cartCount = document.querySelector('.icon-cart span');
        plantAdd.addEventListener('click', function () {
            let current = parseInt(cartCount.innerText);
            cartCount.innerText = current + 1;
            if (current >= 9) {
                cartCount.innerText = '9+';
            }
        });