-- Automatically fill our database
-- Needs to have tables pre-generated by our spring boot application
-- SELECT * FROM weapons;
DROP TABLE bodyslots CASCADE; DROP TABLE defense_tags CASCADE; DROP TABLE defenses CASCADE;DROP TABLE faction_tags CASCADE; DROP TABLE factions CASCADE;DROP TABLE faction_weapons; DROP TABLE faction_defenses; DROP TABLE location_tags CASCADE; DROP TABLE locations CASCADE; DROP TABLE ranges CASCADE; DROP TABLE tags CASCADE; DROP TABLE users CASCADE; DROP TABLE weapons CASCADE; DROP TABLE weapons_tags CASCADE; DROP TABLE world_tags CASCADE; DROP TABLE worlds CASCADE;

-- TRUNCATE tags CASCADE;
-- SELECT * FROM worlds;
-- SELECT * FROM tags;

INSERT INTO users (username, password)
VALUES
('iamauser', 'password123'),
('yesmetoo', 'p4ssw0rd');

INSERT INTO tags (name)
VALUES
('Fantasy'),
('Sci-Fi'),
('Superhero'),
('Alternate History'),
('Horror'),
('Steampunk');

INSERT INTO worlds (name, description, user_id)
VALUES
('Westeros', 'The world of GoT', 
 	(SELECT id FROM users WHERE username='iamauser')
),
('Star Wars', 'The world of the Star Wars franchise', 
 	(SELECT id FROM users WHERE username='yesmetoo')
);

INSERT INTO world_tags(world_id, tag_id)
VALUES
((SELECT id FROM worlds WHERE name='Westeros'),(SELECT id FROM tags WHERE name='Fantasy')), -- Westeros is fantasy
((SELECT id FROM worlds WHERE name='Star Wars'),(SELECT id FROM tags WHERE name='Sci-Fi')); -- Star wars is sci-fi

-- Use this: http://hastur.net/wiki/Body_Slots_(D&D)
INSERT INTO bodyslots (name)
VALUES
('Head'),
('Face'),
('Torso'),
('Back'),
('Throat'),
('Arm'),
('Hand'),
('Rings'),
('Body'),
('Waist'),
('Legs'),
('Main hand'),
('Off hand');

-- Explaination https://www.reddit.com/r/DungeonWorld/comments/2dml94/weapon_ranges/
INSERT INTO ranges (name)
VALUES
('Hand'),
('Close'),
('Reach'),
('Near'),
('Far');

INSERT INTO factions (name, description, population, world_id)
VALUES
('Human','fleshy, bag of meat and organs',300000000,(SELECT id FROM worlds WHERE name='Westeros')),
('Jedi','multi-race, collection of force weilders',2000,(SELECT id FROM worlds WHERE name='Star Wars'));

INSERT INTO faction_tags (faction_id, tag_id)
VALUES
(1,1),
(2,2);

INSERT INTO locations (name, description, world_id)
VALUES
('Dragon Stone','Home of the mother of Dragons',1),
('Death Star','Powerful weapon/planet',2);

INSERT INTO weapons (name, description, range_id)
VALUES
('Dragon glass','Used to kill white walkers',(SELECT id FROM ranges WHERE name='Hand')),
('Blaster','automatic laser projectile',(SELECT id FROM ranges WHERE name='Near'));

INSERT INTO faction_weapons (faction_id, weapon_id)
VALUES
(1,1);

INSERT INTO weapons_tags (weapon_id, tag_id)
VALUES
(1,1),
(2,2);

INSERT INTO defenses (name, description, bodyslot_id)
VALUES
('Knights Armor','chest plate', (SELECT id FROM bodyslots WHERE name='Torso')),
('lightsaber','redirect blaster bullets', (SELECT id FROM bodyslots WHERE name='Main hand'));

INSERT INTO defense_tags (defense_id, tag_id)
VALUES
(1,1),
(2,2);


