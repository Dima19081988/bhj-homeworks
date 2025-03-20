document.querySelectorAll('.product__quantity-control_inc').forEach(button => {
    button.addEventListener('click', function(){
        const quantityElement = this.parentElement.querySelector('.product__quantity-value');
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = quantity + 1;
    })
})

document.querySelectorAll('.product__quantity-control_dec').forEach(button => {
    button.addEventListener('click', function(){
        const quantityElement = this.parentElement.querySelector('.product__quantity-value');
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantityElement.textContent = quantity - 1;
        }
    })
})
const cardProductsContainer = document.querySelector('.cart__products');

document.querySelectorAll('.product__add').forEach(button => {
    button.addEventListener('click', function(){
        const productElement = this.closest('.product');
        const productId = productElement.getAttribute('data-id');
        const productImage = productElement.querySelector('.product__image').src;
        const productQuantity = parseInt(productElement.querySelector('.product__quantity-value').textContent);

        const existingProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);
        if (existingProduct){
            const existingQuantutyElement = existingProduct.querySelector('.cart__product-count');
            let existingQuantity = parseInt(existingQuantutyElement.textContent);
            existingQuantutyElement.textContent = existingQuantity + productQuantity;
        } else {
            const cartProducts = document.querySelector('.cart__products');
            const cardProduct = document.createElement('div');
            cardProduct.className = 'cart__product';
            cardProduct.setAttribute('data-id', productId);
            cardProduct.innerHTML = `
                <img class="cart__product-image" src = "${productImage}">
                <div class="cart__product-count">${productQuantity}</div>
                <div class="cart__product-remove">Удалить товар</div> 
            `;
            cartProducts.appendChild(cardProduct);
            removeProductButton(cardProduct);
            updateCartVisiability();
        }

    });
});

function removeProductButton(cardProduct) {
    const removeButton = cardProduct.querySelector('.cart__product-remove');
    removeButton.addEventListener('click', function(){
        const quantityElement = cardProduct.querySelector('.cart__product-count');
        let currentQuantity = parseInt(quantityElement.textContent)

        if (currentQuantity > 1) {
            quantityElement.textContent = currentQuantity - 1;
        } else {
            cardProduct.remove();
        }
        updateCartVisiability();
    });
};

function updateCartVisiability(){
    const cartTitle = document.querySelector('.cart__title');
    if (cardProductsContainer.children.length > 0) {
        cartTitle.style.display = 'block';
    } else {
        cartTitle.style.display = 'none';
    };
};

