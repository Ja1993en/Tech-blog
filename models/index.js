const User = require('./user')
const Post = require('./post')



User.hasMany(Post,
    {
        foreignKey: 'author_id',
        onDelete: 'CASCADE',
});

Post.belongsTo(User, {
    foreignKey: 'author_id',
  });
  
module.exports = {User, Post}
