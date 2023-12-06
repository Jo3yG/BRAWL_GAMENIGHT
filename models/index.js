const User = require('./user');
const Character = require('./character');

//User.hasOne(Character, {
//  foreignKey: 'user_id',
  //onDelete: 'CASCADE'
//});
//Character.belongsTo(User, {
  //foreignKey: 'user_id'
//});

module.exports = { User, Character };
