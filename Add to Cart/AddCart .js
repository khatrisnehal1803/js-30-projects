const products = [
    { id: 1, name: "Casual Black Polo", price: 100, image:"https://picsum.photos/id/1012/150/150"},
    { id: 2, name: "Waterproof Hoodie", price: 60, image: "https://picsum.photos/id/1015/150/150" },
    { id: 3, name: "Blue Sweatshirt", price: 120, image: "https://picsum.photos/id/1020/150/150" },
    { id: 4, name: "Hooded Urban Jacket", price: 125, image: "https://picsum.photos/id/1005/150/150" },
    { id: 5, name: "Cold Weather Jacket", price: 147, image: "https://picsum.photos/id/1032/150/150" },
    { id: 6, name: "Sporty Jacket", price: 80, image: "https://picsum.photos/id/1012/150/150" },
    { id: 7, name: "Olive Heritage Hoodie", price: 82, image: "https://picsum.photos/id/1003/150/150" },
    { id: 8, name: "Bright Horizon Polo", price: 70, image: "https://picsum.photos/id/1040/150/150" }
  ];

  let cart = [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total");

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });

  function addToCart(id) {
    const item = products.find(p => p.id === id);
    const found = cart.find(i => i.id === id);
    if (found) {
      found.quantity++;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    updateCart();
  }

  function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
      const itemTotal = item.quantity * item.price;
      total += itemTotal;
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-info">
          <strong>${item.name}</strong><br>$${item.price}
        </div>
        <div class="cart-controls">
          <input type="number" value="${item.quantity}" min="1" onchange="changeQty(${item.id}, this.value)">
          <button onclick="removeItem(${item.id})">❌</button>
        </div>
      `;
      cartItems.appendChild(div);
    });
    totalPrice.textContent = total.toFixed(2);
  }

  function changeQty(id, value) {
    const item = cart.find(i => i.id === id);
    item.quantity = parseInt(value);
    updateCart();
  }

  function removeItem(id) {
    cart = cart.filter(i => i.id !== id);
    updateCart();
  }
