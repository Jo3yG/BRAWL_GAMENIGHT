DROP DATABASE IF EXISTS smash_brawl;
CREATE DATABASE smash_brawl;
USE smash_brawl;
CREATE TABLE characters (
  id INT NOT NULL,
  charName VARCHAR(30) NOT NULL,
  descriptio VARCHAR(3000) NOT NULL,
  regMoves VARCHAR(300) NOT NULL,
  finalSmash VARCHAR(30) NOT NULL,
  gameSeries VARCHAR(30) NOT NULL,
  firstApp VARCHAR(30) NOT NULL
);
INSERT INTO characters (id, charName, descriptio, regMoves, finalSmash, gameSeries, firstApp)
VALUES (001, "Mario", "Near the beginning, he fights in a friendly match with Kirby but after the Subspace army appears, he gets knocked far away from a stadium, and then gets saved by Pit. Later, Mario and Pit team up with Link, Yoshi, and Kirby.",
        "Fireball, Cape, Super Jump Punch, F.L.U.D.D","Mario Finale","Super Mario","Donkey Kong (1981)"),
       (002, "Luigi", "Luigi is transformed into a trophy by King Dedede in order for him to revive him when Tabuu defeats all of the other heroes. After Tabuu does this, a special brooch that Dedede made revives Luigi and Ness, who go with Dedede to save the others.","Fireball, Green Missle, Super Jump Punch, Luigi Cyclone","Negative Zone",
       "Super Mario","Mario Bros (1983)"),
       (003, "Princess Peach", "At first she gets trapped by Petey Piranha. If Kirby manages to save her, then the two team up. Later, Shadow-bugs take over her body and try to turn Mario and Pit into trophies. Link and Yoshi stop her, however. If she is not saved, Wario turns her into a trophy, but she is stolen by King Dedede, and then Bowser takes her trophy. Both princesses are later rescued by Meta Knight, Snake, and Lucario.",
       "Toad, Peach Bomber, Peach Parasol, Vegetable","Peach Blossom","Mario","Super Mario Bros (1985)"),
       (004, "Bowser", " Bowser is a member of the Subspace Army, thinking he is working for Master Hand. He goes across the world fighting Smashers, but when he learns that Master Hand was being manipulated by Tabuu, he joins the heroes.",
       "Fire Breath, Flying Slam, Whirling Fortress, Bowser Bomb","Giga Bowser Transformation",
       "Super Mario","Super Mario Bros (1984)");













