const {User} = require('../models');
const userData = [
    {
        username:'Joey',
        password:'JoeyGaytan',
    },
    {
        username:'Art',
        password:'ArtVargas',
    },
    {
        username:'Joshy',
        password:'JoshySoto',
    },
];
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
