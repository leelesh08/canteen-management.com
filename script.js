// script.js
document.addEventListener('DOMContentLoaded', function() {
  const menuList = document.getElementById('menu-list');
  const cartItems = document.getElementById('cart-items');
  const totalPrice = document.getElementById('total-price');
  const checkoutBtn = document.getElementById('checkout-btn');

  // Sample menu data
  const menuItems = [
    { name: 'Burger', price: 5.99 },
    { name: 'Pizza', price: 8.99 },
    { name: 'Salad', price: 4.99 },
    // Add more items as needed
  ];

  // Populate menu
  menuItems.forEach(item => {
    const menuItem = document.createElement('li');
    menuItem.innerHTML = `
      <span>${item.name}</span>
      <span>$${item.price.toFixed(2)}</span>
      <input type="number" min="0" value="0" />
      <button>Add to Cart</button>
    `;
    menuList.appendChild(menuItem);

    const addToCartBtn = menuItem.querySelector('button');
    addToCartBtn.addEventListener('click', function() {
      const quantity = parseInt(menuItem.querySelector('input').value);
      if (quantity > 0) {
        addToCart(item, quantity);
        updateCartTotal();
      }
    });
  });

  // Function to add item to cart
  function addToCart(item, quantity) {
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
      <span>${item.name}</span>
      <span>$${(item.price * quantity).toFixed(2)}</span>
      <span>Quantity: ${quantity}</span>
    `;
    cartItems.appendChild(cartItem);
  }

  // Function to update cart total
  function updateCartTotal() {
    let total = 0;
    cartItems.querySelectorAll('li').forEach(item => {
      total += parseFloat(item.children[1].innerText.slice(1));
    });
    totalPrice.innerText = total.toFixed(2);
  }

  // Checkout event
  checkoutBtn.addEventListener('click', function() {
    alert(`Total: $${totalPrice.innerText}`);
    // You can implement further actions like sending order data to a server
    // or navigating to a checkout page
  });
});
