DROP DATABASE IF EXISTS raffles_db;
CREATE DATABASE raffles_db;

\c raffles_db;

DROP TABLE IF EXISTS winners;
DROP TABLE IF EXISTS participants;
DROP TABLE IF EXISTS raffles;

CREATE TABLE raffles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    secret_token VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE participants (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255),
    raffle_id INTEGER REFERENCES raffles(id) ON DELETE CASCADE
);

CREATE TABLE winners (
    raffle_winner_id INTEGER REFERENCES raffles(id) ON DELETE CASCADE,
    participant_winner_id INTEGER REFERENCES participants(id) ON DELETE CASCADE,
    CONSTRAINT pk_winners_id PRIMARY KEY (raffle_winner_id, participant_winner_id)
);
