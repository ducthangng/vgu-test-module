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

create table testquestions (
	id INT NOT NULL auto_increment,
	content TEXT NOT NULL,
	type int NOT NULL,
	difficulty INT NOT NULL,
	dateupdated DATETIME,
	datecreated DATETIME NOT NULL,
	PRIMARY KEY (id),
	-- 1 -- Multiple Choice, 2 -- Text
	CONSTRAINT valid_type_check_testquestions CHECK (type IN (1, 2)),
	CONSTRAINT valid_difficulty_check_testquestions CHECK (
		difficulty BETWEEN 1
		AND 5
	)
);

create table testanswers (
	id INT NOT NULL auto_increment,
	question_id INT NOT NULL,
	content VARCHAR(150) NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (question_id) REFERENCES testquestions (id)
);

create table testresults (
	id INT NOT NULL AUTO_INCREMENT,
	test_class_id INT NOT NULL,
	user_id INT NOT NULL,
	entity_code INT NOT NULL,
	datecreated DATETIME NOT NULL,
	score FLOAT NOT NULL,
	comment varchar(200),
	resultnote varchar(255),
	dateupdated DATETIME,
	PRIMARY KEY (id),
	FOREIGN KEY (test_class_id) REFERENCES testclassrelations (id),
	FOREIGN KEY (user_id) REFERENCES students (id),
	CONSTRAINT valid_type_check CHECK (type IN (1, 2)),
	UNIQUE KEY (test_class_id, user_id, datecreated)
);

create table testentryanswer (
	result_id INT NOT NULL,
	question_id INT NOT NULL,
	answer_id INT NOT NULL,
	UNIQUE KEY (id, questionid),
	FOREIGN KEY (result_id) REFERENCES testresults (id),
	FOREIGN KEY (question_id) REFERENCES testquestions (id),
	FOREIGN KEY (answer_id) REFERENCES testanswers (id)
);

create table testentryanswertext (
	result_id INT NOT NULL,
	question_id INT NOT NULL,
	answer TEXT,
	UNIQUE KEY (result_id, questionid),
	FOREIGN KEY (result_id) REFERENCES testresults (id),
	FOREIGN KEY (question_id) REFERENCES testquestions (id)
);

create table testcomments (
	result_id INT NOT NULL,
	question_id INT NOT NULL,
	comment TEXT,
	datecreated DATETIME NOT NULL,
	dateupdated DATETIME,
	UNIQUE KEY (result_id, question_id),
	FOREIGN KEY (result_id) REFERENCES testresults (id),
	FOREIGN KEY (question_id) REFERENCES testquestions (id)
);