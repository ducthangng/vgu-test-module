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