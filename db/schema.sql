CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burger_list
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);