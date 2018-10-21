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
})

// build a function to prompt user to make purchase

//SQL query to display data

//console.table to display data from database

//change else console.log its working to run the purchase function 