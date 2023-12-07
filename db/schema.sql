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
       (005, "Pokemon Trainer","He encounters Lucas in the Ruined Zoo and they battle the Subspace Army. They later go in search of an Ivysaur and a Charizard, the two Pokémon that the Trainer needs. After the capture them, they fight Galleom and are rescued by Meta Knight before Galleom self-destructs. ",
       "Pokemon Change: Charizard, Ivysaur, Squirtle","Triple Finish","Pokemon","Pokémon Red/Green (1996) This Incarnation: Pokémon FireRed/LeafGreen (2004)"),
       (006,"Jigglypuff","Jigglypuff is the one of the three characters not to have a role in the Subspace Emissary. It is found in a secret door, and will join you if you defeat her.",
       "Rollout, Pound, Sing, Rest","Puff Up","Pokemon","Pokémon Red/Green (1996)"),
       (007,"Ness","Ness help Lucas defeat Porky Minch, but when Wario tries to turn Lucas into a trophy, Ness sacrifices himself to save Lucas. His trophy is later stolen by King Dedede, who gives him a Dedede Brooch, which will revive him in a set amount of time. When he is revived, he helps Luigi and Dedede rescue the Smashers who were defeated by Tabuu.",
       "PK Fire, PK Thunder, PK Flash, PSI Magnet","PK Starstorm","Earthbound/Mother","Earthbound (1995)"),
       (008,"Lucas","When Wario turns Ness into a trophy, Lucas runs into the Pokémon Trainer, and they join forces. They later defeat Wario and team up with Marth, Ike, Mario, Link, Kirby, Pit, and Yoshi.",
       "PK Freeze, PK Fire, PK Thunder, PSI Magnet","PK Starstorm","Earthbound/Mother","Earthbound (2006)"),
       (009,"Solid Snake","Snake has been hiding on the Halberd in his cardboard box. When he travels through the ship, he meets and teams up with Meta Knight and Lucario. When they reach the control room, Snake throws all of the Game & Watches who were piloting the ship out the window, and they turn into Duon, who Snake helps fight.",
       "Grenade, Remote Missile, Cypher, C4","Grenade Launcher","Metal Gear","Metal Gear (1987)"),
       (010,"Sonic The Hedgehog","Towards the end of the story, Sonic appears and breaks one of Tabuu's wings, weakening his Off Wave powers. He then joins the other Smashers to fight Tabuu.",
       "Homing Attack, Spin Dash, Spring Jump, Spin Charge","Super Sonic","Sonic The Hedgehog","Sonic The Hedgehog (1991)"),
       (011,"Captain Falcon","When a giant ROB attacks Olimar and his Pikmin, Captain Falcon rescues them. They later join with Donkey Kong, Diddy Kong, Samus, Pikachu, and the master ROB. They escape the Isle of the Ancients, which is about to explode, in Captain Falcon's Falcon Flyer.",
       "Falcon Punch, Raptor Boost, Falcon Dive, Falcon Kick","Blue Falcon","F-Zero","F-Zero (1990)"),
       (012,"Lucario","When Meta Knight reaches the top of the mountain, Lucario challenges him to a duel. After that, they team up and board the Halberd, where they meet Snake. Later, Lucario helps fight Duon.",
       "Aura Sphere, Force Palm, ExtremeSpeed, Double Team","Aura Storm","Pokemon","Pokémon Diamond & Pearl (2006)"),
       (013,"Pikachu","Pikachu is being used to power a factory, and Samus rescues him. They later team up with Donkey Kong, Diddy Kong, Captain Falcon, Captain Olimar, and ROB.",
       "Thunder Jolt, Skull Bash, Quick attack, Thunder","Volt Tackle","Pokemon","Pokémon Red/Green (1996)"),
       (014,"King Dedede","After learning of Tabuu's great powers, Dedede invents a brooch that will revive Smasher's trophies after a set amount of time. He turns Luigi into a trophy, and steals Ness and the princess's trophies from Wario, and he gives them each a brooch. However, Bowser steals the princess, but Luigi and Ness still help Dedede rescue everyone from Tabuu.",
       "Inhale, Waddle Dee Toss, Super Dedede Jump, Jet Hammer",),
       (015,"Meta Knight","Before the story begins, Meta Knight's battleship, the Halberd, is stolen by the Subspace Army. Much later, he travels up a mountain to reach his ship. At the mountaintop, he meets and eventually befriends Lucario. While on the Halberd, they team up with Snake and rescue Zelda and Peach. ",
       "Mach Tornado, Drill Rush, Shuttle Loop, Dimensional Cape","Galaxia Darkness","Kirby","Kirbys Adventure (1993)"),
       (016,"Kirby","Near the beginning, he fights in a friendly match with Mario, but after the Subspace army appears he must save either Princess Peach or Princess Zelda from Petey Piranha. Later, Bowser captures the princess Kirby saved, and Kirby goes to help Mario, Link, Pit, and Yoshi. He is the one who later destroys the Subspace Gunship.",
       "Inhale, Hammer, Final Cutter, Stone","Cook Kirby","Kirby","Kirbys Dream Land (1992)"),
       (017,"R.O.B"," Before the story starts, Tabuu blackmails ROB's people into inventing Subspace Bombs for the army. In shame, ROB becomes the Ancient Minister and places Subspace Bombs across the world. When Ganondorf orders the bombs to go off in the Isle of the Ancients, the Minister tries to stop him, but fails. As ROB, he joins Samus, Pikachu, Captain Falcon, Olimar, Donkey Kong, and Diddy Kong.",
       "Robo Beam, Arm Rotor, Robo Burner, Gyro","Diffusion Beam","Nintendo","Gyromite (1985)"),
       (018,"Ice Climbers","When Meta Knight travels up the mountain that they are climbing, they take it as a challenge and travel with him. But when the Halberd crashes into the mountain, they fall off and meet Mario and Marth's teams.",
       "Ice Shot, Squall Hammer, Belay, Blizzard","Iceberg","Ice Climbers","Ice Climbers (1985)"),
       (019,"Pit"," The Subspace Army invades when Pit is watching Mario and Kirby's fight. Palutena sends him out into the world to fight the innvaders, and he rescues Mario along the way. They later team up with Link, Yoshi, and Pit.",
       "Palutenas Arrow, Angel Ring, Wings of Icarus, Mirror Shield","Palutenas Army","Kid Icarus","Kid Icarus (1987)"),
       (020,"Zero Suit Samus Aran","While in search of her Power Suit, Samus encounters a Pikachu, who is trapped in a machine that drains its power. She rescues it, and they go to the location of her Power Suit.",
       "Paralyzer, Plasma Whip, Plasma Wire, Flip Jump","Power Suit Samus","Metroid","Metroid (1987)"),
       (021,"Samus Aran","While in her Power Suit, she rescues Pikachu from a machine draining his powers, and they locate her Power Suit. They later team up with Donkey Kong, Diddy Kong, Captain Falcon, Captain Olimar, and R.O.B.",
       "Charge Shot, Missile, Screw Attack, Bomb","Zero Laser","Metroid","Metroid"),
       (022,"Toon Link","Toon Link doesn't appear in the main story, but in a secret door in the Forest, you can encounter and fight Toon Link, and he'll join you if you defeat him.",
       "Heros Bow, Gale Boomerang, Spin Attack, Bomb","Triforce Slash","The Legend of Zelda","The Legend of Zelda (1986) This Incarnation: The Legend of Zelda: Wind Waker (2003)"),
       (023,"Ganondorf","Ganondorf is a member of the Subspace Army, but he plans to take it over when the time is right. When he finally goes to meet Master Hand, he learns the army's true leader is Tabuu, who turns him into a trophy. Link and Zelda revive him and he helps them defeat Tabuu.",
       "Warlock Punch, Flame Choke, Dark Diva, Wizards Foot","Beast Ganon","The Legend of Zelda","The Legend of Zelda (1986) This Incarnation: The Legend of Zelda: Twilight Princess (2006)"),
       (024,"Sheik","After the two princess are resuced, Zelda transform into Sheik as she battles on the Halberd. She also teams up with Fox, Snake, Lucario and Falco.",
       "Needle Storm, Chain, Vanish, Transform","Light Arrow","The Legend of Zelda","The Legend of Zelda: Ocarina of Time (1998)"),
       (025,"Princess Zelda","At first, she is captured by Petey Piranha. If Kirby manages to save her, then they will team up. Later, she is possessed by Shadow-Bugs and attempts to turn Link and Yoshi into trophies. Mario and Pit stop her, however. If she is not saved, Wario turns her into a trophy, but she is stolen by King Dedede, and then Bowser takes her trophy.  Both princesses are later rescued by Meta Knight, Snake, and Lucario.",
       "Nayrus Love, Dins Fire, Farores Wind, Transform","Light Arrow","The Legend of Zelda (1986)","The Legend of Zelda (1986) This Incarnation: The Legend of Zelda: Twilight Princess (2006)"),
       (026,"Link","When he first appears, he pulls the Master Sword from its pedestal in the woods, and teams up with Yoshi to fight the Subspace Army. They later join Mario, Pit, and Yoshi.",
       "Heros Bow, Gale Boomerang, Spin Attack, Bomb","Triforce Slash","Legend of Zelda(1986)","The Legend of Zelda (1986)  This Incarnation: The Legend of Zelda: Twilight Princess (2006)"),
       (027,"Link","When he first appears, he pulls the Master Sword from its pedestal in the woods, and teams up with Yoshi to fight the Subspace Army. They later join Mario, Pit, and Yoshi.",
       "Heros Bow, Gale Boomerang, Spin Attack, Bomb","Triforce Slash","Legend of Zelda(1986)","The Legend of Zelda (1986)  This Incarnation: The Legend of Zelda: Twilight Princess (2006)"),
       (028,"Wario","Wario is a lower ranking member of the Subspace Army. After Kirby rescues one princess from Petey Piranha, Wario comes down and captures the one Kirby failed to save. He is later shown in the Ruined Zoo capturing Ness. Later, Lucas and the Trainer defeat him, and his trophy is sucked into Subspace. When he is saved, he decides to help the heroes fight Tabuu instead of fighting them, because he is outnumbered.",
       "Chomp, Wario Bike, Corkscrew, Wario Waft","Wario-Man","Super Mario & Wario","Super Mario Land 2: 6 Golden Coins (1992)"),
       (029,"Yoshi","The Subspace Army attacks while he is sleeping, and he teams up with Link to fight the villains off. They later join up with Mario, Pit, and Kirby. ",
       "Egg Lay, Egg Roll, Egg Throw, Yoshi Bomb","IDK","Super Mario & Yoshi","Super Mario World (1991)"),
       (030,"Diddy Kong","After Bowser steals their bananas, he and Donkey Kong track down Bowser, who turns Donkey Kong into a trophy. Diddy escapes, and teams up with Fox to fight Rayquaza. Much later, they encounter Bowser, whose Dark Cannon gets destroyed by Falco. Falco later drops Diddy off on the Smash Skiff, where Donkey Kong is being held. With the help of Captain Falcon and Captain Olimar, they take over the Smash Skiff, and join up with Samus, Pikachu, and ROB.",
       "Peanut Popgun, Monkey Flip, Rocketbarrel Boost, Banana Peel","Rocketbarrel Barrage","Donkey Kong & Mario Spin-Offs","Donkey Kong Country (1994)"),
       (031,"Donkey Kong","He and Diddy Kong chase after Bowser, who has stolen their bananas. However, Bowser tries to use his Dark Cannon on Diddy, and Donkey Kong saves him, getting turned into a trophy in the process. He is later rescued by Diddy, Captain Falcon, and Captain Olimar. They then team up with Samus, Pikachu, and ROB.",
       "Giant Punch, Headbutt, Spinning Kong, Hand Slap","Konga Beat","Super Mario & Donkey Kong","Donkey Kong (1984)")


























