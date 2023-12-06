const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Character extends Model {}
Character.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      charName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      regMoves: {
        type: DataTypes.TEXT,
      },
      finalSmash: {
        type: DataTypes.TEXT,
      },
      gameSeries: {
        type: DataTypes.TEXT,
      },
      firstApp: {
        type: DataTypes.TEXT,
      },
    votes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'character',
    }
  );
  module.exports = Character;















