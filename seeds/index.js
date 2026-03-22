const { User } = require("../model");
const userData = require('./user-seeds.js');
const sequelize =require('../config/connection.js')

const seedTables =  async ()  => {

    await sequelize.sync({ force: true });
    await User.bulkCreate(userData, {
        individualHooks: true, // 🔥 ensures password hashing works
    });
    process.exit(0);
}

seedTables()