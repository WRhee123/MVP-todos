CREATE TABLE todos (id SERIAL PRIMARY KEY, 
todo VARCHAR(255) NOT NULL, 
time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);