const mySQL = require("mysql");
const inquirer = require("inquirer");
const Table = require('cli-table');

const connection = mySQL.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password", 
  database: "bamazon"
});
connection.connect(function(err){
    if (err) throw err;

    showInventory();
        //console.log(err);
        //console.log("There is an error");
    //}
    //else console.log("It's working!");
    
});

function showInventory(){
// display all of the items available for sale 
connection.query('SELECT * FROM products', function(err, res){
    if(err) throw err;
console.log("Welcome to Bamazon!");
console.log("-------------------------------");


//create a table for the information from the bamazon mysql database to be placed
const table = new Table({
	head: ['item_id', 'product_name','price'],
	style: {
	head: ['blue'],
	compact: false,
	colAligns: ['center'],
		}
	});   
});

for(var i = 0; i < res.length; i++){
    table.push(
        [res[i].item-id, res[i].product_name, res[i].price]
    );
}
console.log(table.toString());

purchase();
};

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

