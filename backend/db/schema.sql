DROP DATABASE IF EXISTS raffles_db;
CREATE DATABASE raffles_db;

\c raffles_db;

DROP TABLE IF EXISTS winners;
DROP TABLE IF EXISTS participants;
DROP TABLE IF EXISTS raffles;

CREATE TABLE raffles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    secret_token VARCHAR(255) UNIQUE NOT NULL,
    created_on TIMESTAMP,
    raffled_on TIMESTAMP
);

CREATE TABLE participants (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255),
    raffle_id  INTEGER REFERENCES raffles(id) ON DELETE CASCADE
);

CREATE TABLE winners (
    id SERIAL PRIMARY KEY,
    raffle_id INTEGER REFERENCES raffles(id) ON DELETE CASCADE,
    winner_id INTEGER REFERENCES participants(id) ON DELETE CASCADE
);
