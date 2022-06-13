create database if not exists pe;

use pe;

create table users (
	id INT NOT NULL AUTO_INCREMENT,
	full_name VARCHAR(255) NOT NULL,
	username VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL,
	gender VARCHAR(255) NOT NULL,
	address VARCHAR(255),
	mail VARCHAR(255),
	phone VARCHAR(255),
	dob DATETIME,
	qualification VARCHAR(255),
	entity_code INT NOT NULL,
	active INT NOT NULL,
	datecreated DATETIME NOT NULL,
	dateupdated DATETIME,
	UNIQUE (username),
	PRIMARY KEY (id),
	CONSTRAINT valid_role_check CHECK (entity_code IN (1, 2, 3, 4))
);

create table user_class (
	uid INT NOT NULL,
	cid INT NOT NULL,
	active TINYINT NOT NULL,
	FOREIGN KEY (cid) REFERENCES classes (id),
	FOREIGN KEY (uid) REFERENCES users (id),
	PRIMARY KEY (uid, cid)
);