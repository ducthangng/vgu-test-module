use pe;

create table tags (
	id INT NOT NULL AUTO_INCREMENT,
	tag VARCHAR(255) NOT NULL,
	info TEXT NOT NULL,
	active TINYINT NOT NULL,
	datecreated DATETIME NOT NULL,
	dateupdated DATETIME,
	PRIMARY KEY (id),
	UNIQUE(tag)
);

create table testbank (
	id INT NOT NULL AUTO_INCREMENT,
	tag_id INT NOT NULL,
	test_name VARCHAR(255) NOT NULL,
	created_user_id INT NOT NULL,
	target_entity_code INT NOT NULL,
	title VARCHAR(255) NOT NULL,
	info TEXT NOT NULL,
	duration INT,
	dateassigned DATETIME NOT NULL,
	deadline DATETIME,
	active TINYINT,
	datecreated DATETIME NOT NULL,
	dateupdated DATETIME,
	PRIMARY KEY (id),
	UNIQUE(test_name),
	FOREIGN KEY (tag_id) REFERENCES tags (id),
	FOREIGN KEY (created_user_id) REFERENCES users (id),
	CONSTRAINT valid_role_check_testbank CHECK (target_entity_code IN (1, 2, 3, 4))
);

create table testresults (
	id INT NOT NULL AUTO_INCREMENT,
	test_class_id INT NOT NULL,
	user_id INT NOT NULL,
	entity_code INT NOT NULL,
	datecreated DATETIME NOT NULL,
	score FLOAT NOT NULL,
	comment varchar(255),
	resultnote varchar(255),
	dateupdated DATETIME,
	PRIMARY KEY (id),
	FOREIGN KEY (test_class_id) REFERENCES test_class (id),
	FOREIGN KEY (user_id) REFERENCES users (id),
	UNIQUE KEY (test_class_id, user_id, datecreated)
);


create table testskill (
	id INT NOT NULL AUTO_INCREMENT,
	media_url VARCHAR(200),
	title VARCHAR(200) NOT NULL,
	content VARCHAR(255) NOT NULL,
	description VARCHAR(200) NOT NULL,
	section MEDIUMTEXT NOT NULL,
	datecreated DATETIME NOT NULL,
	dateupdated DATETIME NOT NULL,
	PRIMARY KEY (id),
	UNIQUE(title)
);


create table testcomments (
	result_id INT NOT NULL,
	comment TEXT,
	datecreated DATETIME NOT NULL,
	dateupdated DATETIME,
	UNIQUE KEY (result_id),
	FOREIGN KEY (result_id) REFERENCES testresults (id)
);

create table skilltest_test (
	id INT NOT NULL AUTO_INCREMENT
	tid INT NOT NULL,
	stid INT NOT NULL,
	PRIMARY KEY (tid, stid),
	FOREIGN KEY (tid) REFERENCES testbank (id),
	FOREIGN KEY (stid) REFERENCES testskill (id)
)

insert into skill_test values (1, 1);
insert into skill_test values (1, 2);
insert into skill_test values (1, 3);
insert into skill_test values (1, 4);
insert into skill_test values (1, 5);

