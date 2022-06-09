use pe;

create table classes (
	id INT NOT NULL AUTO_INCREMENT,
	class_name VARCHAR(255) NOT NULL,
	info TEXT NOT NULL,
	announcement TEXT NOT NULL,
	room_code VARCHAR(255) NOT NULL,
	level VARCHAR(255) NOT NULL,
	active TINYINT NOT NULL,
	datecreated DATETIME NOT NULL,
	dateupdated DATETIME,
	primary key (id),
	UNIQUE(class_name)
);

create table class_test (
	id INT NOT NULL AUTO_INCREMENT,
	class_id INT NOT NULL,
	test_id INT NOT NULL,
	primary key (id),
	FOREIGN KEY (class_id) REFERENCES classes (id),
	FOREIGN KEY (test_id) REFERENCES testbank (id)
);