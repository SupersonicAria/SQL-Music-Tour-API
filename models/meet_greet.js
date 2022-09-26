'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meet_Greet extends Model {
    static associate({ Band, Event }) {
      // band
      Meet_Greet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })

      // event
      Meet_Greet.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })
    }
  }

  Meet_Greet.init({
    meet_greet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    band_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    meet_start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    meet_end_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Meet_Greet',
    tableName: 'meet_greets',
    timestamps: false
  });
  return Meet_Greet;
};