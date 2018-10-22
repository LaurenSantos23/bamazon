# Bamazon Overview
This is an app similar to Amazon, using an SQL database. This is a command line Node.js app utilizing MySQL database storage. 
Bamazon Takes orders from customers and depletes inventory from "stores" stock. 

### Customer View Function
* I created a MySQL Database called `bamazon`
* Then created a Table inside of that database called `products`.
* The products table has each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

I then populated the Bamazon database with 10 different products "for sale"

* I created a Node application called `bamazonCustomer.js`. Running the application will first display all of the items available for sale with the ids, names, and prices of products

* The app should then prompt users with two messages.

   * Name of ID customer would like to buy
   * How many units of the product they would like to buy.
   
* After the customer has placed an order, Bamazon application checks if the store has enough of the product to meet the customer's request.

   * If not, the app Bamazon will log the phrase `Insufficient quantity!`, and then prevent the order from going through.

* However, if the store _does_ have enough of the product, then Bamazon would fulfill the customer's order.
 
  * When a customer places a order, the SQL database is updated to reflect the remaining quantity.
  * Once the update goes through the total price will then be displayed to the customer.
  
  ### Screenshots will go here
  
  ### Link to Video Walkthrough will go here
  
  ### Link to Deployed Bamazon Github Application
   https://laurensantos23.github.io/bamazon/
