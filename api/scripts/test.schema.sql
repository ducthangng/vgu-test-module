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
	active TINYINT NOT NULL,
	dateupdated DATETIME,
	PRIMARY KEY (id),
	FOREIGN KEY (test_class_id) REFERENCES test_class (id),
	FOREIGN KEY (user_id) REFERENCES users (id),
	UNIQUE KEY (test_class_id, user_id, datecreated)
);

create table skilltests (
	id INT NOT NULL AUTO_INCREMENT,
	media_url VARCHAR(200),
	title VARCHAR(200) NOT NULL,
	content MEDIUMTEXT NOT NULL,
	description VARCHAR(200) NOT NULL,
	section MEDIUMTEXT NOT NULL,
	type VARCHAR(30) NOT NULL,
	datecreated DATETIME NOT NULL,
	dateupdated DATETIME,
	PRIMARY KEY (id),
	UNIQUE(title)
);

create table test_answer (
	id INT NOT NULL,
	section_answer MEDIUMTEXT NOT NULL,
	UNIQUE KEY (id),
	FOREIGN KEY (id) REFERENCES testresults (id)
);

create table skilltest_test (
	tid INT NOT NULL AUTO_INCREMENT,
	stid INT NOT NULL,
	PRIMARY KEY (tid, stid),
	FOREIGN KEY (tid) REFERENCES testbank (id),
	FOREIGN KEY (stid) REFERENCES skilltests (id)
);

insert into
	skill_test
values
	(1, 1);

insert into
	skill_test
values
	(1, 2);

insert into
	skill_test
values
	(1, 3);

insert into
	skill_test
values
	(1, 4);

insert into
	skill_test
values
	(1, 5);

insert into
	testbank
values
	(
		1,
		1,
		'test1',
		1,
		1,
		'test1',
		'test1',
		0,
		'2015-01-01',
		'2015-01-01',
		1,
		'2015-01-01',
		'2015-01-01'
	);

insert into
	testbank
values
	(
		2,
		1,
		'test2',
		1,
		1,
		'test2',
		'test2',
		0,
		'2015-01-01',
		'2015-01-01',
		1,
		'2015-01-01',
		'2015-01-01'
	);

insert into
	testbank
values
	(
		3,
		1,
		'test3',
		1,
		1,
		'test3',
		'test3',
		0,
		'2015-01-01',
		'2015-01-01',
		1,
		'2015-01-01',
		'2015-01-01'
	);

insert into
	testbank
values
	(
		4,
		1,
		'test4',
		1,
		1,
		'test4',
		'test4',
		0,
		'2015-01-01',
		'2015-01-01',
		1,
		'2015-01-01',
		'2015-01-01'
	);

insert into
	testbank
values
	(
		5,
		1,
		'test5',
		1,
		1,
		'test5',
		'test5',
		0,
		'2015-01-01',
		'2015-01-01',
		1,
		'2015-01-01',
		'2015-01-01'
	);