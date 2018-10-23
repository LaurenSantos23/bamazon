const mySQL = require("mysql");
const inquirer = require("inquirer");
const table = require("console.table");


const connection = mySQL.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password", 
  database: "bamazon"
})
connection.connect(function(err){
    if (err){
       // console.log(err);
        //console.log("There is an error");
    }
    console.log("-----------------------------------------------")
    console.log("------------Welcome to Bamazon!!---------------");
    console.log('-----------------------------------------------');
    console.log("--------Here is our current inventory----------");
    console.log("-----------------------------------------------");
    showInventory();
});

// display all of the items available for sale 
function showInventory(){
    // prints items for sale and their details
    connection.query('SELECT * FROM products', function(err, res){
        if(err) throw err; 
        console.table(res);
    //Include the ids, names, and prices of products for sale
    }
)}  


//The app should then prompt users with two messages.
// ID of the product they would like to buy?
//how many units of the product they would like to buy?
function customerOrder() {
    inquirer.prompt([
      {
        name: "idChoice",
        type:"list",
        message:"Please input the ID of the product you would like to purchase.",
        selections:["1","2", "3", "4", "5", "6", "7","8", "9", "10"]
      },
      {
          name:"quantityChoice",
          type:"input",
          message:"How many of this item would you like to purchase?"
      }
    ])
    .then(function(userSelection) {
        var item = userSelection.idChoice;
        connection.query("SELECT item_id, stock_quantity, price FROM products WHERE item_id = ?", [item], function(err, res){
            if (err) throw err;
            //console.log(err)
            //console.log("There was an error processing your purchase")
            //App needs to check database to see if there is enough product to meet customers request
            if (res[0].stock_quantity < userSelection.quantity_choice) {
                console.log("Insufficient Quantity!")
                //if not console.log "Insufficient quantity" prevent order from going through
            }
            else {
                //if enough product, fulfill customers order
                console.log(res);
                // This means updating the SQL database to reflect the remaining quantity.
                var updateStock = res[0].stock_quantity - userSelection.quantity_choice;
                var userCheckout = userSelection.quantity_choice;
                // Once the update goes through, show the customer the total cost of their purchase.
                buyStuff(difference, item);//need to build function for this
                showTotal(item, userCheckout);//need to build function for this
            }
        })
    })
}

//var buyStuff = function()

//var showTotal = function()

//only the table with the current inventory is showing, my prompts are not showing up 
