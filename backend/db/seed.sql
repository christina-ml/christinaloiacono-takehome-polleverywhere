\c raffles_db;

INSERT INTO raffles (name, secret_token) VALUES
('Awesome Pet Basket Raffle', 'aBc123PE'),
('Staycation Gift Card Raffle', '432xyZee'),
('Sports Raffle', '2H4s3w'),
('PollEv Beach Getaway Raffle', '854w9n');

INSERT INTO participants (firstname, lastname, email, phone, raffle_id) VALUES
('Christina', 'Loiacono', 'christinaloiacono@pursuit.org', '555-123-4567', 2),
('Tim', 'Asprec', 'tim@pursuit.org', '555-321-8765', null),
('Pak', 'Chu', 'pak@pursuit.org', null, 1);

INSERT INTO winners(raffle_winner_id, participant_winner_id) VALUES
(1, 3),
(2, 1);