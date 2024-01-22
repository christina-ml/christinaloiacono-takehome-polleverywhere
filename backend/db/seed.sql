\c raffles_db;

INSERT INTO raffles (name, secret_token, created_on, raffled_on) VALUES
('Awesome Pet Basket Raffle', 'aBc123PE',  '2024-01-29 10:56:00', '2024-08-06 10:15:21'),
('Staycation Gift Card Raffle', '432xyZee', '2022-10-29 10:56:00', '2024-01-08 09:12:23'),
('Sports Raffle', '2H4s3w', '2024-11-11 11:12:01', null),
('PollEv Beach Getaway Raffle', '854w9n', '2021-05-11 13:12:01', '2023-03-24 10:56:00'),
('Charity Raffle', '7f2G32c', '2020-08-14 11:32:01', '2022-10-24 04:32:42'),
('Swimming Pool Raffle', 't5t7MvPe7', '2018-10-24 04:32:42', null);

INSERT INTO participants (firstname, lastname, email, phone, raffle_id) VALUES
('Christina', 'Loiacono', 'christinaloiacono@pursuit.org', '555-123-4567', 4),
('Tim', 'Asprec', 'tim@pursuit.org', '555-321-8765', 4),
('Pak', 'Chu', 'pak@pursuit.org', null, 1),
('John', 'Doe', 'john@pursuit.org', null, 1),
('Sherlock', 'Holmes', 'sherlock@mystery.edu', null, 3),
('Clark', 'Kent', 'clark@superhero.edu', null, 2),
('Jon', 'Snow', 'jon@winter.edu', '555-452-8965', 3),
('Katniss', 'Everdeen', 'kat@hungergames.org', null, 3),
('Harry', 'Potter', 'harry@hogwarts.edu', '555-111-9263', 6),
('Luke', 'Skywalker', 'luke@starwars.net', '555-467-2299', 2),
('Papa', 'Smurf', 'pops@smurfvillage.org', '555-467-2299', 2),
('Peter', 'Parker', 'peter@spiderman.org', '555-321-1111', 2);

INSERT INTO winners (raffle_id, winner_id) VALUES
(1, 4),
(2, 3),
(5, null),
(3, null),
(6, null);
