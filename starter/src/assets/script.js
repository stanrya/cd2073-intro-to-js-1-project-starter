/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

const products = [
  {
    name: "Cherry",
    price: 1,
    quantity: 0,
    productId: 1,
    image: "https://i.imgur.com/OEN9b6a.jpeg"
  },
  {
    name: "Orange",
    price: 2,
    quantity: 0,
    productId: 2,
    image: "https://i.imgur.com/gISJ8wJ.jpeg"
  },
  {
    name: "Strawberry",
    price: 3,
    quantity: 0,
    productId: 3,
    image: "https://i.imgur.com/lFFnh0P.jpeg"
  }
];


/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

let cart = [];

let totalPaid = 0;

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(productId) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].productId === productId) {
      products[i].quantity++;
      if (!cart.includes(products[i])) {
        cart.push(products[i]);
      }
      break; 
    }
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].productId === productId) {
      products[i].quantity++;
      break; // break the loop since the product is found
    }
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].productId === productId) {
      products[i].quantity--;
      if (products[i].quantity === 0) {
        // Remove the product from the cart
        const index = cart.indexOf(products[i]);
        if (index !== -1) {
          cart.splice(index, 1);
        }
      }
      break; // break the loop since the product is found
    }
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].productId === productId) {
      products[i].quantity = 0;
      const index = cart.indexOf(products[i]);
      if (index !== -1) {
        cart.splice(index, 1);
      }
      break; // break the loop since the product is found
    }
  }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

function cartTotal() {
  let totalCost = 0;
  for (const product of cart) {
    totalCost += product.price * product.quantity;
  }
  return totalCost;
}

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  cart = [];
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

function pay(amount) {
  totalPaid += amount;
  return totalPaid - cartTotal();
}


/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
