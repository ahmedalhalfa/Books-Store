-- DROP SCHEMA bms;
CREATE SCHEMA bms AUTHORIZATION postgres;

-- bms.book definition
-- Drop table
-- DROP TABLE bms.book;
CREATE TABLE bms.book (
    id serial4 NOT NULL,
    title varchar(300) NOT NULL,
    description varchar(1000) NULL,
    author varchar(50) NOT NULL,
    publisher varchar(50) NOT NULL,
    pages int4 NULL,
    storecode varchar(5) NOT NULL,
    createdon timestamp NOT NULL,
    createdby varchar(50) NOT NULL,
    CONSTRAINT idpkey PRIMARY KEY (id)
);

-- bms.store definition
-- Drop table
-- DROP TABLE bms.store;
CREATE TABLE bms.store (
    id serial4 NOT NULL,
    "name" varchar(100) NOT NULL,
    storecode varchar(5) NOT NULL,
    createdon timestamp NOT NULL,
    createdby varchar(50) NOT NULL,
    address varchar(200) NOT NULL,
    CONSTRAINT storeidpkey PRIMARY KEY (id)
);