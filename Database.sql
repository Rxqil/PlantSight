CREATE TABLE companies (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE plants (
  id SERIAL PRIMARY KEY,
  company_id INT REFERENCES companies(id),
  name TEXT NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  company_id INT REFERENCES companies(id),
  plant_id INT REFERENCES plants(id),
  full_name TEXT,
  email TEXT UNIQUE,
  password TEXT,
  role TEXT
);

CREATE TABLE zones (
  id SERIAL PRIMARY KEY,
  plant_id INT REFERENCES plants(id),
  name TEXT,
  zone_type TEXT
);

CREATE TABLE checkpoints (
  id SERIAL PRIMARY KEY,
  zone_id INT REFERENCES zones(id),
  label TEXT
);

CREATE TABLE tracking_events (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  zone_id INT,
  event_type TEXT,
  event_time TIMESTAMP DEFAULT NOW()
);

CREATE TABLE alerts (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  plant_id INT REFERENCES plants(id),
  alert_type TEXT,
  message TEXT,
  resolved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);
