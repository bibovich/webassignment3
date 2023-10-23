// Define an empty array to store the cart items
const cart = [];
let totalPrice = 0; 

// Function to update the shopping cart display
function updateCartDisplay() {
    const cartList = document.getElementById("cartList");
    cartList.innerHTML = "";

    totalPrice = 0; // Reset the total price

    // Loop through each item in the cart
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        const itemPrice = item.price * item.quantity;

        // Display the item, quantity, and price, along with a "Remove" button
        li.innerHTML = `${item.quantity}x ${item.name} - €${itemPrice.toFixed(2)}
            <button class="remove-item" data-index="${index}">Remove</button>`;

        cartList.appendChild(li);

        totalPrice += itemPrice; // Update the total price
    });

    updateTotalPriceDisplay();
}

// Function to update the total price display
function updateTotalPriceDisplay() {
    const totalPriceElement = document.getElementById("totalPrice");
    totalPriceElement.textContent = `Total Price: €${totalPrice.toFixed(2)}`;
}

// Event listener for remove buttons
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-item")) {
        const index = event.target.getAttribute("data-index");
        removeItemFromCart(index);
    }
});

// Function to remove an item from the cart
function removeItemFromCart(index) {
    cart.splice(index, 1); // Remove the item from the cart array
    updateCartDisplay(); // Update the cart display
}

// Event listener for "Add to cart" buttons
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("add-to-cart")) {
        const name = event.target.getAttribute("data-name");
        const price = parseFloat(event.target.getAttribute("data-price"));
        addItemToCart(name, price);
    }
});

// Function to add an item to the cart
function addItemToCart(name, price) {
    // Check if the item is already in the cart
    const item = cart.find((cartItem) => cartItem.name === name);
    if (item) {
        item.quantity++; // Increase the quantity if it exists in the cart
    } else {
        cart.push({ name, price, quantity: 1 }); // Add the item to the cart with quantity 1
    }

    updateCartDisplay(); // Update the cart display 
}
