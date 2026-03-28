const router = require('express').Router();
const userApi = require('./user')
// const CommentApi = require('./')
const postApi = require('./post')

router.use('/user', userApi);
router.use('/post', postApi)
// router.use('/comment',)



module.exports = router 