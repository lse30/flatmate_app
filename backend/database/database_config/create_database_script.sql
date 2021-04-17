/*
Run this file in mySQL Workbench to create the database with some init data to test with
*/

DROP DATABASE IF EXISTS flatM8s;
CREATE DATABASE flatM8s;
USE flatM8s;

CREATE TABLE flats (
	flat_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    flat_password VARCHAR(255) NOT NULL,
    PRIMARY KEY (flat_id)
);

CREATE TABLE users (
	user_id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    auth_token VARCHAR(255),
    flat_id INT, 
	PRIMARY KEY (user_id),
    FOREIGN KEY (flat_id) REFERENCES flats(flat_id)
);

ALTER TABLE flats 
	ADD COLUMN administrator INT NOT NULL,
	ADD CONSTRAINT FOREIGN KEY (administrator) REFERENCES users(user_id);

INSERT INTO users (first_name, surname, email, password)
	VALUES  ('Liam', 'Seymour', 'lseymour123@gmail.com', 'admin'),
			('Stefan', 'Hall',  'pest@xero.co.nz', 'cockies'),
			('Olive', 'Rees', 'bestcat@meow.com', 'chaseflies');
        
INSERT INTO flats (name, flat_password, administrator)
	VALUES  ('Bentley Bunch', 'Ali', '1');

UPDATE users
	SET flat_id = 1
	WHERE user_id = 1;

/*
Uncomment the queries below to view the tables
*/
/*
SELECT * FROM users;
SELECT * FROM flats;
*/
