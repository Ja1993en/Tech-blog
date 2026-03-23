const { Model, DataTypes, INTEGER } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');


class User extends Model {
    checkPassword(loginPw) {
        // console.log(loginPw);
      return bcrypt.compareSync(loginPw, this.passcode);
    }
  }
  


User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        
        username: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        passcode: {
            type: DataTypes.STRING,
            allowNull: false,
         
        },
    },

    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.passcode = await bcrypt.hash(newUserData.passcode, 10);
                return newUserData;
            }
        },
    
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }

);


module.exports = User;