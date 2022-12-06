-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS secrets;

CREATE TABLE users (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email VARCHAR UNIQUE,
    password_hash VARCHAR NOT NULL
);

CREATE TABLE secrets (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR,
    description VARCHAR,
    created_at TIMESTAMP WITH TIME ZONE
DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO secrets (title, description)
VALUES
('secret secret, very hush hush', 'aliens created Idaho, government does not want you to know'),
('Keith Richards should be dead', 'PUPPIES ARE SACRIFICED TO KEEP HIM ALIVE.');