DROP DATABASE IF EXISTS flatM8s ;

/*
run this file in mySQL Workbench to create the database with some init data to test with
*/

CREATE DATABASE flatM8s;
USE flatM8s;
CREATE TABLE users (
	user_id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    auth_token VARCHAR(255),
	PRIMARY KEY (user_id)
);

INSERT INTO users (first_name, surname, email, password)
VALUES  ('Liam', 'Seymour', 'lseymour123@gmail.com', 'admin'), 
		('Stefan', 'Hall',  'pest@xero.co.nz', 'cockies'), 
        ('Olive', 'Rees', 'bestcat@meow.com', 'chaseflies');

SELECT * from users;


