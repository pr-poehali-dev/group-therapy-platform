CREATE TABLE applications (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    contact VARCHAR(255) NOT NULL,
    topic TEXT,
    direction VARCHAR(255),
    psychologist VARCHAR(255),
    contact_method VARCHAR(50),
    comment TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);