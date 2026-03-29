const router = require('express').Router();
const userApi = require('./user')
const CommentApi = require('./comment')
const postApi = require('./post')

router.use('/user', userApi);
router.use('/post', postApi)
router.use('/comment', CommentApi)



module.exports = router 