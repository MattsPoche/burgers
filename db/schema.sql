--ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'pass';

--flush privileges;

CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table burgers
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured boolean NOT NULL,
PRIMARY KEY (id)
);