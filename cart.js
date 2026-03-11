// sample data – in a real app this would come from the server or state
const cartData = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 12.99,
    quantity: 2,
    image: "https://via.placeholder.com/80",
    special: "Buy 2 get 1 free!"
  },
  {
    id: 2,
    name: "Caesar Salad",
    price: 8.50,
    quantity: 1,
    image: "https://via.placeholder.com/80"
  }
];

const TAX_RATE = 0.08;

const cartItemsEl = document.getElementById('cartItems');
const summaryEl = document.getElementById('summary');
const checkoutBtn = document.getElementById('checkoutBtn');

// render the list of items
function renderCart() {
  cartItemsEl.innerHTML = '';
  cartData.forEach(item => {
    const li = document.createElement('li');
    li.className = 'cart-item';
    li.dataset.id = item.id;

    li.innerHTML = `
      <img class="item-image" src="${item.image}" alt="${item.name}">
      <div class="item-details">
        <div class="item-name">${item.name}</div>
        <div class="item-price">$${item.price.toFixed(2)}</div>
        ${item.special ? `<div class="discount">${item.special}</div>` : ''}
      </div>
      <div class="quantity-control">
        <button class="decrease">&minus;</button>
        <input type="number" min="1" value="${item.quantity}">
        <button class="increase">&plus;</button>
      </div>
      <button class="remove-btn">Remove</button>
    `;

    // attach event listeners
    li.querySelector('.remove-btn').addEventListener('click', () => removeItem(item.id));
    li.querySelector('.decrease').addEventListener('click', () => changeQty(item.id, -1));
    li.querySelector('.increase').addEventListener('click', () => changeQty(item.id, +1));
    li.querySelector('input').addEventListener('change', e => setQty(item.id, parseInt(e.target.value, 10)));

    cartItemsEl.appendChild(li);
  });

  calculateSummary();
}

// remove an item entirely
function removeItem(id) {
  const idx = cartData.findIndex(i => i.id === id);
  if (idx > -1) cartData.splice(idx, 1);
  renderCart();
}

// adjust quantity by delta
function changeQty(id, delta) {
  const item = cartData.find(i => i.id === id);
  if (!item) return;
  item.quantity = Math.max(1, item.quantity + delta);
  renderCart();
}

// set quantity directly from input
function setQty(id, qty) {
  const item = cartData.find(i => i.id === id);
  if (!item) return;
  item.quantity = Math.max(1, qty || 1);
  renderCart();
}

// compute subtotal, tax and total; show proceed button when cart non-empty
function calculateSummary() {
  const subtotal = cartData.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  summaryEl.innerHTML = `
    <div class="row"><span class="label">Subtotal:</span> $${subtotal.toFixed(2)}</div>
    <div class="row"><span class="label">Tax (8%):</span> $${tax.toFixed(2)}</div>
    <div class="row total"><span class="label">Total:</span> $${total.toFixed(2)}</div>
  `;

  checkoutBtn.disabled = cartData.length === 0;
}

// start the flow
renderCart();

// checkout button could hook into your checkout flow
checkoutBtn.addEventListener('click', () => {
  alert('Proceeding to checkout…');
  // window.location.href = '/checkout';
});
