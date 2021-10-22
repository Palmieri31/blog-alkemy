create database blog;
use blog;

create table categories (
	id int not null auto_increment,
    category varchar(50),
    constraint pk_categories primary key(id)
);

create table posts (
	id int not null auto_increment,
    title varchar(50),
    content varchar(200),
    image varchar(100),
    categoryId int,
    creation_date date,
    constraint pk_posts primary key(id),
    constraint fk_posts_categories foreign key(id) references categories(id)
);

drop database blog;