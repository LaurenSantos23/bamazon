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
    console.log("------------Welcome to Bamazon!!---------------")
    console.log('-----------------------------------------------')
    console.log("--------Here is our current inventory----------")
    console.log("-----------------------------------------------")
    showInventory();
    //customerOrder();
});

// display all of the items available for sale 
function showInventory(){
    // prints items for sale and their details
    connection.query('SELECT * FROM products', function(err, res){
        if(err) throw err; 
        console.log("-----------------------------------------------")
        console.log("-----------------------------------------------")
        console.table(res);
        console.log("-----------------------------------------------")
        console.log("-----------------------------------------------")

        customerOrder();
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
        type:"choices",
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
        const item = userSelection.idChoice;
        connection.query("SELECT item_id, stock_quantity, price FROM products WHERE item_id = ?", [item], function(err, res){
            if (err) throw err;
            //console.log(err)
            //console.log("There was an error processing your purchase")
            //App needs to check database to see if there is enough product to meet customers request
            if (res[0].stock_quantity < userSelection.quantityChoice) {
                console.log("Insufficient Quantity! We need to restock that item, check back soon!")
                //if not console.log "Insufficient quantity" prevent order from going through
            }
            else {
                //if enough product, fulfill customers order
                console.log(res);
                // This means updating the SQL database to reflect the remaining quantity.
                const updateStock = res[0].stock_quantity - userSelection.quantityChoice;
                const userCheckout = userSelection.quantityChoice;
                // Once the update goes through, show the customer the total cost of their purchase.
                buyStuff(howManyLeft, itId);//need to build function for this
                showTotal(item, userCheckout);//need to build function for this
            }
        })
    })
}
// this function updates the SQL database 
const buyStuff = function(howManyLeft, itId) {
    connection.query("UPDATE products SET ? WHERE ?",
    [
        {
            stock_quantity: howManyLeft
        },
        {
            item_id: itId
        }
    ])

}
// this function will display the total cost of the items user selected and then end the sale 
const customerTotal = function(itId, custQuantity) {
    connection.query("SELECT stock_quantity, price FROM products WHERE item_id = ?", [itId], function(err, res){
        if (err) throw err;
        //if purchase is successful, then display the price to customer and end connection 
        console.log(res[0].price);
        console.log("Total"+ res[0].price * custQuantity);
    })
    conncection.end();
}

// 
