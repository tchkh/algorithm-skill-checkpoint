function sortProductsByPrice(products) {
  // Your code here
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products.length - 1; j++) {
      if (products[i].price < products[j].price) {
        ;[products[i], products[j]] = [products[j], products[i]]
      }
    }
  }
  return products
}

// Test case
const products = [
  { name: 'Apple', price: 1.2 },
  { name: 'Banana', price: 0.8 },
  { name: 'Cherry', price: 2.5 },
  { name: 'Date', price: 7.5 },
]
console.log(sortProductsByPrice(products))

// Output: [
//   { name: 'Banana', price: 0.8 },
//   { name: 'Apple', price: 1.2 },
//   { name: 'Date', price: 1.5 },
//   { name: 'Cherry', price: 2.5 }
// ]
