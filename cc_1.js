// Declare variables
let employeeName = "Luke Manley"; // string value
const employeeID = 8591; // number value
var isActive = true; // boolean value

// Output the values and their types
console.log("employeeName:", employeeName); // Logs the value of employeeName
console.log("Type of employeeName:", typeof employeeName); // Logs the type of employeeName

console.log("employeeID:", employeeID); // Logs the value of employeeID
console.log("Type of employeeID:", typeof employeeID); // Logs the type of employeeID

console.log("isActive:", isActive); // Logs the value of isActive
console.log("Type of isActive:", typeof isActive); // Logs the type of isActive

// Declare array to store a list of company products
let products = ["Television", "Calculator", "Smartphone"];

// Declare an object to represent a product with properties: name, price, and inStock
const productDetails = {
    name: "Television",
    price: 189.99,
    inStock: true
};

// Log the array and the object to the console
console.log("Available Products:", products);
console.log("Product Details:", productDetails);

// Declare the variable and initialize it with an initial balance
let accountBalance = 1000; // Initial balance of $1000

// Log the initial balance
console.log(`Initial balance: $${accountBalance}`);

// Perform an addition operation
accountBalance += 200; // Adding $200 to the balance
console.log(`After adding $200: $${accountBalance}`);

// Perform a subtraction operation
accountBalance -= 50; // Subtracting $50 from the balance
console.log(`After subtracting $50: $${accountBalance}`);

// Perform a multiplication operation
accountBalance *= 1.1; // Increasing balance by 10% (multiplying by 1.1)
console.log(`After multiplying by 1.1: $${accountBalance}`);

// Perform a division operation
accountBalance /= 2; // Dividing balance by 2
console.log(`After dividing by 2: $${accountBalance}`);

// Perform a modulus operation
accountBalance %= 75; // Getting the remainder after dividing by 75
console.log(`After modulus with 75: $${accountBalance}`);
