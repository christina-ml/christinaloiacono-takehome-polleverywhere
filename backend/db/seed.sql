\c raffles_db;

INSERT INTO raffles (name, secret_token, created_on, raffled_on) VALUES
('Awesome Pet Basket Raffle', 'aBc123PE',  '2024-08-29 10:56:00', '2024-01-06 10:15:21'),
('Staycation Gift Card Raffle', '432xyZee', '2024-10-29 10:56:00', '2024-01-08 09:12:23'),
('Sports Raffle', '2H4s3w', '2024-11-11 11:12:01', null),
('PollEv Beach Getaway Raffle', '854w9n', '2021-05-11 13:12:01', null);

INSERT INTO participants (firstname, lastname, email, phone, raffle_id) VALUES
('Christina', 'Loiacono', 'christinaloiacono@pursuit.org', '555-123-4567', 2),
('Tim', 'Asprec', 'tim@pursuit.org', '555-321-8765', null),
('Pak', 'Chu', 'pak@pursuit.org', null, 1);

INSERT INTO winners(raffle_winner_id, participant_winner_id) VALUES
(1, 3),
(2, 1);
