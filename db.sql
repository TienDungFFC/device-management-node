CREATE TABLE Users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    dv_list_ver INTEGER,
    vid_list_ver INTEGER,
    tl_list_ver INTEGER,
    created_at TEXT
);

CREATE TABLE Devices (
    id TEXT PRIMARY KEY,
    name TEXT NULL,
    user_id INTEGER,
    status BOOLEAN NOT NULL DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE Videos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    filename TEXT NOT NULL,
    user_id INTEGER,
    created_at TEXT,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE Timelines (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    filename TEXT NOT NULL,
    user_id INTEGER,
    created_at TEXT,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);


INSERT INTO Users (username, password, dv_list_ver, vid_list_ver, tl_list_ver, created_at) 
VALUES 
  ('user1', '1', 1, 1, 1, '2024-06-01 10:00:00'),
  ('user2', '2', 1, 1, 1, '2024-06-01 11:00:00'),
  ('user3', '3', 1, 1, 1, '2024-06-01 12:00:00');

INSERT INTO Devices (id, name, user_id, status) 
VALUES 
  ('device1', 'Device 1', 1, 1),
  ('device2', 'Device 2', 1, 0),
  ('device3', 'Device 3', 2, 1);

INSERT INTO Videos (filename, user_id, created_at) 
VALUES 
  ('video1.mp4', 1, '2024-06-01 10:15:00'),
  ('video2.mp4', 1, '2024-06-01 10:30:00'),
  ('video3.mp4', 2, '2024-06-01 11:00:00');

INSERT INTO Timelines (filename, user_id, created_at) 
VALUES 
  ('timeline1.json', 1, '2024-06-01 10:45:00'),
  ('timeline2.json', 1, '2024-06-01 11:15:00'),
  ('timeline3.json', 2, '2024-06-01 11:30:00');

