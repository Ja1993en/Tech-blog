// post route to post a comment 
//Maybe delete a comment
const router = require('express').Router();
// const { User } = require('../../models')
const {Comment, } = require('../../models');
// const { findByPk } = require('../../models/user');

router.post('/save', async (req, res) => {
console.log(req.body);
 
    const createPost = await Comment.create(
        { 
        comment: req.body.comment,
        author_id: req.session.user_id,
        post_id: req.body.post_id,
        });

res.json(createPost)
})

module.exports = router