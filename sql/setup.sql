-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS secrets CASCADE;

CREATE TABLE users (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE secrets (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE
DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO secrets (title, description)
VALUES
('secret secret, very hush hush', 'aliens created Idaho, government does not want you to know');
