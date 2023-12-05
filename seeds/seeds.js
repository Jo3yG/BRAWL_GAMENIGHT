const sequelize = require('../config/connection.js');
const { User, Character } = require('../models');

const userData = require('./userData.json');
const characterData = require('./characterData.json');

const seedBase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Character.bulkCreate(characterData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedBase();
