const  {User}  = require("../models");
const userData = require('./user-seeds.js');
const sequelize =require('../config/connection.js');
const Post = require("../models/post");
const postData = require('./post-seeds.js')

const seedTables =  async ()  => {

    await sequelize.sync({ force: true });
    await User.bulkCreate(userData, {
        individualHooks: true, // 🔥 ensures password hashing works
    });
    // console.log(postData)
    await Post.bulkCreate(postData);
    process.exit(0);
}

seedTables()