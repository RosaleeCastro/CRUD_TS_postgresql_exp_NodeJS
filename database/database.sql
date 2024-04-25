CREATE DATABASE CREATE typescriptdatabase;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email VARCHAR(40)
);
INSERT INTO users (name, email) 
    VALUES ('joe', 'joe@ibm.com'),
           ('rosa', 'rosa@ibm.com');
