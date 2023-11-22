function addToCart(productName) {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    cart.push(productName);
    localStorage.setItem('cart', JSON.stringify(cart));

    displayCart();
}

function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
}

function displayCart() {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    let cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        cartList.appendChild(li);
    });
}

function finalizarCompra() {
    const cart = JSON.parse(localStorage.getItem('cart'));

    if (cart && cart.length > 0) {
        console.log('Itens no Carrinho:');
        cart.forEach(item => {
            console.log(item);
        });

        alert('Compra realizada com sucesso! Estamos processando seu pedido.');
    } else {
        alert('Carrinho vazio. Adicione itens antes de finalizar a compra.');
    }
}

window.onload = function() {
    displayCart();
};
