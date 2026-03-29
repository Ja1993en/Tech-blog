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

User.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
})
Comment.belongsTo(User, {
    foreignKey:'author_id'
})

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
})

Comment.belongsTo(Post,{
    foreignKey: 'post_id',
 })

Post.belongsTo(User, {
    foreignKey: 'author_id',
  });
  







module.exports = {User, Post, Comment}

