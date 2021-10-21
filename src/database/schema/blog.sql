create database blog;
use blog;

create table posts (
	id int not null auto_increment,
    title varchar(50),
    content varchar(200),
    image varchar(100),
    category_id int,
    creation_date date,
    constraint pk_posts primary key(id)
);

create table categories (
	id int not null auto_increment,
    category varchar(50),
	constraint fk_categories foreign key(id) references posts(category_id)
);

