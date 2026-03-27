const  {User, Post, Comment}  = require("../models");
const userData = require('./user-seeds.js');
const sequelize =require('../config/connection.js');

const postData = require('./post-seeds.js')
const commentData = require('./comment-seeds')


const seedTables =  async ()  => {

    await sequelize.sync({ force: true });
    await User.bulkCreate(userData, {
        individualHooks: true, // 🔥 ensures password hashing works
    });
    // console.log(postData)
    await Post.bulkCreate(postData);
    await Comment.bulkCreate(commentData)


    process.exit(0);
}

seedTables()