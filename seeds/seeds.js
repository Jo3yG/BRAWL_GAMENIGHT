const sequelize = require('../config/connection.js');
const { User, Character } = require('../models/index.js');

const userData = require('./userData.js');
const characterData = require('./characterData.js');

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
