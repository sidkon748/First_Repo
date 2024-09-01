// Declare variables
let employeeName = "Luke Manley"; // This is a string value
const employeeID = 8591; // This is a number value
var isActive = true; // This is a boolean value

// Output the values & types
console.log("employeeName:" + employeeName); // Logs value of employeeName
console.log("Type of employeeName:" + typeof employeeName); // Logs type of employeeName

console.log("employeeID:" + employeeID); // Logs value of employeeID
console.log("Type of employeeID:" + typeof employeeID); // Logs type of employeeID

console.log("isActive:" +  isActive); // Logs value of isActive
console.log("Type of isActive:" + typeof isActive); // Logs type of isActive

// Declare array to store a list of company products
let products = ['Television', 'Computer','Airpods', 'Smartphone', 'Calculator'];

// Declare an object to represent a product with properties of name, price, and inStock
const productDetails = {
    name: 'Television',
    price: 189.99,
    inStock: true
};

// Log the array and the object to the console
console.log("Products:" + products);/// Declare variables
console.log("Product Details:" + productDetails);

// Declare the variable and initialize it with an initial balance
let accountBalance = 10000; // Initial balance of $10000

// Log the initial balance
console.log(`The initial balance is $${accountBalance}.`);

// Perform an addition operation
accountBalance += 142; // Adding $142 to the balance
console.log(`Adding $142 = $${accountBalance}`);

// Perform a subtraction operation
accountBalance -= 10; // Subtracting $10 from the balance
console.log(`Subtracting $10 = $${accountBalance}`);

// Perform a multiplication operation
accountBalance *= 1.2; // Increasing balance by 20% (multiplying by 1.2)
console.log(`Multiplying by 1.2 = $${accountBalance}`);

// Perform a division operation
accountBalance /= 4; // Dividing balance by 4
console.log(`Dividing by 4 = $${accountBalance}`);

// Perform a modulus operation
accountBalance %= 37; // Getting the remainder after dividing by 37
console.log(`Modulus of 37 = $${accountBalance}`);

// Declare variables for two employee scores
let employeeScore1 = 74; // Score for Employee One
let employeeScore2 = 91; // Score for Employee Two

// Compare employee scores using comparison operators
console.log("employeeScore1 > employeeScore2:" , employeeScore1 > employeeScore2); // Makes sure employeeScore1 is greater than employeeScore2
console.log("employeeScore1 < employeeScore2:" , employeeScore1 < employeeScore2); // Makes sure employeeScore1 is less than employeeScore2
console.log("employeeScore1 >= employeeScore2:" , employeeScore1 >= employeeScore2); // Makes sure employeeScore1 is greater than or equal to employeeScore2
console.log("employeeScore1 <= employeeScore2:" , employeeScore1 <= employeeScore2); // Makes sure employeeScore1 is less than or equal to employeeScore2
console.log("employeeScore1 === employeeScore2:" , employeeScore1 === employeeScore2); // Makes sure employeeScore1 is equal to employeeScore2

//Declare boolean values
let hasKeyCard = true; // determines whether boolean value hasKeyCard is true or false
let hasPermission  = true; // determines whether boolean value hasPermission  is true or false

let AccessForArea1 = hasKeyCard && hasPermission; // Determine if access for area 1 is possible (needs key card and permission)
console.log("Access area 1:" + AccessForArea1); // shows true if both true, false otherwise

let AccessForArea2 = hasKeyCard || hasPermission; // Determine if access for area 2 is possible (needs key card or permission)
console.log("Access area 2:" + AccessForArea2); // shows true if either true, false otherwise

let AccessForArea3 = !hasKeyCard; // Determine if access for area 3 is not possible (no key card)
console.log("Access area 3:" + AccessForArea3); // shows true if hasKeyCard = false, false otherwise

let AccessForArea4 = !hasPermission; // Determine if access for area 4 is not possible (no permission)
console.log("Access area 4:" + AccessForArea4); // shows true if hasPermission = false, false otherwise

let AccessForArea5 = !hasKeyCard && hasPermission; // Determine if access for area 5 is possible (needs key card or permission)
console.log("Access area 5:" + AccessForArea5); // shows true if hasKeyCard is false and hasPermission is true, false otherwise

let AccessForArea6 = !hasPermission || hasKeyCard; // Determine if access for area 6 is possible (needs key card or permission)
console.log("Access area 6:" + AccessForArea6); // shows true if either boolean is true, false otherwise