drop database if exists bamazon;

create database bamazon;

use bamazon;

create table products (
    item_id int auto_increment not null,
    product_name varchar(100) not null,
    department_name VARCHAR(100) not null,
    price DECIMAL(10,2) not null,
    stock_quantity INT(10) not null,
    primary key (item_id)
    );

SELECT * FROM products;

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES ("Monopoly","Games",10.00, 5),
    ("Guess Who", "Games", 15.00, 10);