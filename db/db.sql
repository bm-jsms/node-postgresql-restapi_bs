CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

INSERT INTO users (name, email) 
VALUES 
  ('John Doe', 'john@mail.com'), 
  ('Jane Doe', 'jane@mail.com');

