CREATE DATABASE IF NOT EXISTS nodedb;

USE nodedb;

CREATE TABLE IF NOT EXISTS PEOPLE (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NAME VARCHAR(50)
);

INSERT INTO PEOPLE (name) VALUES ('Pessoa A');
INSERT INTO PEOPLE (name) VALUES ('Pessoa B');
INSERT INTO PEOPLE (name) VALUES ('Pessoa C');