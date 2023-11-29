const {Character} = require('../models');
const characterData = [
    {
        charName: 'Mario',
        description:'',
        regMoves:'Fireball, Cape, Super Jump Punch, F.L.U.D.D',
        finalSmash:'Mario Finale',
        gameSeries:'Super Mario',
        firstApp:'Donkey Kong (1981)',
        user_id:1,
    },
    {
        charName: 'Luigi',
        description:'',
        regMoves:'Fireball, Green Missle, Super Jump Punch, Luigi Cyclone',
        finalSmash:'Negative Zone',
        gameSeries:'Super Mario',
        firstApp:'Mario Bros (1983)',
        user_id:2,
    },
    {
        charName: 'Princess Peach',
        description:'',
        regMoves:'Toad, Peach Bomber, Peach Parasol, Vegetable',
        finalSmash:'Peach Blossom',
        gameSeries:'Mario',
        firstApp:'Super Mario Bros (1985)',
        user_id:3,
    },
    {
        charName: 'Bowser',
        description:'',
        regMoves:'Fire Breath, Flying Slam, Whirling Fortress, Bowser Bomb',
        finalSmash:'Giga Bowser Transformation',
        gameSeries:'Super Mario',
        firstApp:'Super Mario Bros (1984)',
        user_id:4,
    },
    {
        charName: 'Donkey Kong',
        description:'',
        regMoves:'Giant Punch, Headbutt, Spinning Kong, Hand Slap',
        finalSmash:'Konga Beat',
        gameSeries:'Super Mario & Donkey Kong',
        firstApp:'Donkey Kong (1984)',
        user_id:5,
    },
    {
        charName: 'Diddy Kong',
        description:'',
        regMoves:'Peanut Popgun, Monkey Flip, Rocketbarrel Boost, Banana Peel',
        finalSmash:'Rocketbarrel Barrage',
        gameSeries:'Donkey Kong & Mario Spin-Offs',
        firstApp:'Donkey Kong Country (1994)',
        user_id:6,
    },
    {
        charName: 'Yoshi',
        description:'Super Dragon',
        regMoves:'Egg Lay, Egg Roll, Egg Throw, Yoshi Bomb',
        finalSmash:'',
        gameSeries:'Super Mario & Yoshi',
        firstApp:'Super Mario World (1991)',
        user_id:7,
    },
    {
        charName: 'Wario',
        description:'',
        regMoves:'Chomp, Wario Bike, Corkscrew, Wario Waft',
        finalSmash:'Wario-Man',
        gameSeries:'Super Mario & Wario',
        firstApp:'Super Mario Land 2: 6 Golden Coins (1992)',
        user_id:8,
    },
    {
        charName: 'Link',
        description:'',
        regMoves:'Heros Bow, Gale Boomerang, Spin Attack, Bomb',
        finalSmash:'Triforce Slash',
        gameSeries:'Legend of Zelda(1986)',
        firstApp:'The Legend of Zelda (1986)  This Incarnation: The Legend of Zelda: Twilight Princess (2006)',
        user_id:9,
    },
    {
        charName: 'Princess Zelda',
        description:'',
        regMoves:'Nayrus Love, Dins Fire, Farores Wind, Transform',
        finalSmash:'Light Arrow',
        gameSeries:'The Legend of Zelda (1986)',
        firstApp:'The Legend of Zelda (1986) This Incarnation: The Legend of Zelda: Twilight Princess (2006)',
        user_id:10,
    },
    {
        charName: 'Sheik',
        description:'',
        regMoves:'Needle Storm, Chain, Vanish, Transform',
        finalSmash:'Light Arrow',
        gameSeries:'The Legend of Zelda',
        firstApp:'The Legend of Zelda: Ocarina of Time (1998)',
        user_id:11,
    },
    {
        charName: 'Ganondorf',
        description:'',
        regMoves:'Warlock Punch, Flame Choke, Dark Diva, Wizards Foot',
        finalSmash:'Beast Ganon',
        gameSeries:'The Legend of Zelda',
        firstApp:'The Legend of Zelda (1986) This Incarnation: The Legend of Zelda: Twilight Princess (2006)',
        user_id:12,
    },
    {
        charName: 'Toon Link',
        description:'',
        regMoves:'Heros Bow, Gale Boomerang, Spin Attack, Bomb',
        finalSmash:'Triforce Slash',
        gameSeries:'The Legend of Zelda',
        firstApp:'The Legend of Zelda (1986) This Incarnation: The Legend of Zelda: Wind Waker (2003)',
        user_id:13,
    },
    {
        charName: 'Samus Aran',
        description:'',
        regMoves:'Charge Shot, Missile, Screw Attack, Bomb',
        finalSmash:'Zero Laser',
        gameSeries:'Metroid',
        firstApp:'Metroid',
        user_id:14,
    },
    {
        charName: 'Zero Suit Samus Aran',
        description:'',
        regMoves:'Paralyzer, Plasma Whip, Plasma Wire, Flip Jump',
        finalSmash:'Power Suit Samus',
        gameSeries:'Metroid',
        firstApp:'Metroid (1987)',
        user_id:15,
    },
    {
        charName: 'Pit',
        description:'',
        regMoves:'Palutenas Arrow, Angel Ring, Wings of Icarus, Mirror Shield',
        finalSmash:'Palutenas Army',
        gameSeries:'Kid Icarus',
        firstApp:'Kid Icarus (1987)',
        user_id:16,
    },
    {
        charName: 'Ice Climbers',
        description:'',
        regMoves:'Ice Shot, Squall Hammer, Belay, Blizzard',
        finalSmash:'Iceberg',
        gameSeries:'Ice Climbers',
        firstApp:'Ice Climbers (1985)',
        user_id:17,
    },
    {
        charName: 'R.O.B',
        description:'',
        regMoves:'Robo Beam, Arm Rotor, Robo Burner, Gyro',
        finalSmash:'Diffusion Beam',
        gameSeries:'Nintendo',
        firstApp:'Gyromite (1985)',
        user_id:18,
    },
    {
        charName: 'Kirby',
        description:'',
        regMoves:'Inhale, Hammer, Final Cutter, Stone',
        finalSmash:'Cook Kirby',
        gameSeries:'Kirby',
        firstApp:'Kirbys Dream Land (1992)',
        user_id:19,
    },
    {
        charName: 'Meta Knight',
        description:'',
        regMoves:'Mach Tornado, Drill Rush, Shuttle Loop, Dimensional Cape',
        finalSmash:'Galaxia Darkness',
        gameSeries:'Kirby',
        firstApp:'Kirbys Adventure (1993)',
        user_id:20,
    },
    {
        charName: 'King Dedede',
        description:'',
        regMoves:'Inhale, Waddle Dee Toss, Super Dedede Jump, Jet Hammer',
        finalSmash:'Waddle Dee Army',
        gameSeries:'Kirby',
        firstApp:'Kirbys Dream Land (1992)',
        user_id:21,
    },
    {
        charName: 'Pikachu',
        description:'',
        regMoves:'Thunder Jolt, Skull Bash, Quick attack, Thunder',
        finalSmash:'Volt Tackle',
        gameSeries:'Pokemon',
        firstApp:'Pokémon Red/Green (1996)',
        user_id:22,
    },
    {
        charName: 'Lucario',
        description:'',
        regMoves:'Aura Sphere, Force Palm, ExtremeSpeed, Double Team',
        finalSmash:'Aura Storm',
        gameSeries:'Pokemon',
        firstApp:'Pokémon Diamond & Pearl (2006)',
        user_id:23,
    },
    {
        charName: 'Captain Falcon',
        description:'',
        regMoves:'Falcon Punch, Raptor Boost, Falcon Dive, Falcon Kick',
        finalSmash:'Blue Falcon',
        gameSeries:'F-Zero',
        firstApp:'F-Zero (1990)',
        user_id:24,
    },
    {
        charName: 'Sonic The Hedgehog',
        description:'',
        regMoves:'Homing Attack, Spin Dash, Spring Jump, Spin Charge',
        finalSmash:'Super Sonic',
        gameSeries:'Sonic The Hedgehog',
        firstApp:'Sonic The Hedgehog (1991)',
        user_id:25,
    },
    {
        charName: 'Solid Snake',
        description:'',
        regMoves:'Grenade, Remote Missile, Cypher, C4',
        finalSmash:'Grenade Launcher',
        gameSeries:'Metal Gear',
        firstApp:'Metal Gear (1987)',
        user_id:26,
    },
    {
        charName: 'Lucas',
        description:'',
        regMoves:'PK Freeze, PK Fire, PK Thunder, PSI Magnet',
        finalSmash:'PK Starstorm',
        gameSeries:'Earthbound/Mother',
        firstApp:'Mother 3 (2006)',
        user_id:27,
    },
    {
        charName: 'Ness',
        description:'',
        regMoves:'PK Fire, PK Thunder, PK Flash, PSI Magnet',
        finalSmash:'PK Starstorm',
        gameSeries:'Earthbound/Mother',
        firstApp:'Earthbound (1995)',
        user_id:28,
    },
    {
        charName: 'Jigglypuff',
        description:'',
        regMoves:'Rollout, Pound, Sing, Rest',
        finalSmash:'Puff Up',
        gameSeries:'Pokemon',
        firstApp:'Pokémon Red/Green (1996)',
        user_id:29,
    },
    {
        charName: 'Pokemon Trainer',
        description:'',
        regMoves:'Pokemon Change: Charizard, Ivysaur, Squirtle',
        finalSmash:'Triple Finish',
        gameSeries:'Pokemon',
        firstApp:'Pokémon Red/Green (1996) This Incarnation: Pokémon FireRed/LeafGreen (2004)',
        user_id:30,
    },
   

   
];
const seedCharacter = () => Character.bulkCreate(characterData);

module.exports = seedCharacter;
