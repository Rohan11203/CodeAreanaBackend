--- users table
create table users(
  users_id serial primary key,
  email varchar(255) unique not null,
  password varchar(255) not null,
  created_at date default current_date
);