DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT auto_increment NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT(10) NOT null,
    PRIMARY KEY (item_id)
    );

SELECT * FROM products;

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Monstera Plant","Garden",75.00, 25),
    ("20 Year Juniper Bonsai Tree", "Garden", 525.00, 30),
    ("60 Year Japanese Maple Bonsai Tree", "Garden", 1000.00, 5),
    ("Moroccan Wedding Blanket","Home Decor", 356.00, 25),
    ("Vintage Chinese Wedding Bed","Furniture",5500.00, 12),
    ("Moroccan Rug","Home Decor", 150.00, 20),
    ("Vintage Banjera Toran", "Home Decor", 250.00, 10),
    ("Antique French Wardrobe", "Furniture", 750.00, 5 ),
    ("Antique Victorian Silver Candle Holder (2 in set)", "Home Decor", 350.00, 20),
    ("Vintage Silk Screen Japanese Room Divider", "Home Decor", 1500.00, 5);
