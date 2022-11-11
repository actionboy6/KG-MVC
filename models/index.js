const User = require('./User');
const Post = require('./Post');
const Comment = require('./comment');

    Post.hasMany(Comment, {
         foreignKey: "userId",
        onDelete: "CASCADE",
     });

    Post.belongsTo(User, {
         foreignKey: "userId",
         onDelete: "CASCADE",
    });

    Comment.belongsTo(User, {
     foreignKey: "userId",
     onDelete: "CASCADE"
});

module.exports = { User, Post, Comment };