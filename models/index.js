const User = require('./user')
const Post = require('./post')
const Comment = require('./comment');




User.hasMany(Post,
    {
        foreignKey: 'author_id',
        onDelete: 'CASCADE',
});

Post.belongsTo(User, {
    foreignKey: 'author_id',
  });
  
Comment.belongsTo(Post,{
    foreignKey: 'author_id',
 })

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
})


Comment.belongsTo(Post)

module.exports = {User, Post, Comment}

