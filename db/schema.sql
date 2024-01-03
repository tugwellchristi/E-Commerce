DROP DATABASE IF EXISTS ecommerce_db;
CREATE DATABASE ecommerce_db;

-- Use ecommerce_db;

-- CREATE TABLE Category (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     category_name VARCHAR(50) NOT NULL
-- );

-- CREATE TABLE Product (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     product_name VARCHAR(50) NOT NULL,
--     price DECIMAL(10, 2) NOT NULL CHECK (price >= 0),
--     stock INT NOT NULL DEFAULT 10 CHECK (stock >= 0),
--     category_id INT,
--     FOREIGN KEY (category_id) REFERENCES Category(id)
-- );

-- CREATE TABLE Tag (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     tag_name VARCHAR(50)
-- );

-- CREATE TABLE ProductTag (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     product_id INT,
--     tag_id INT,
--     FOREIGN KEY (product_id) REFERENCES Product(id),
--     FOREIGN KEY (tag_id) REFERENCES Tag(id)  
-- );