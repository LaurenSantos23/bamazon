const mySQL = require("mysql");
const inquirer = require("inquirer");


const connection = mySQL.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password", 
  database: "bamazon"
})
connection.connect(function(err){
    if (err){
        console.log(err);
        console.log("There is an error");
    }
    else console.log("It's working!");
    //change else console.log its working to run the purchase function 
})

// display all of the items available for sale 
//Include the ids, names, and prices of products for sale

//The app should then prompt users with two messages.
// ID of the product they would like to buy?
//how many units of the product they would like to buy?

//App needs to check database to see if there is enough product to meet customers request
//if not consolelog Insufficient quantity, prevent order from going through

//if enough product, fulfill customers order
// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.

//console.table to display data from database

