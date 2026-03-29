const router = require('express').Router();
const { User } = require('../models')
const { Post } = require('../models')
const withAuth = require('../utils/auth');

// Dashboard route
router.get('/', withAuth, async (req, res) => {
  try {

    const dbPostData = await Post.findAll({
      where: {
        author_id: req.session.user_id,
      },
      include: [{
        model: User,
        attributes: ['username']
      }]
    });

    // const posts = dbPostData.get({ plain: true })
    const posts = dbPostData.map(post => post.get({ plain: true }));

  
    res.render('dashboard', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/create-post', withAuth, async (req,res) => {
try {
  
  res.render('create-post')
}catch(err){
  res.status(500).json(err)
}

})



router.get('/update-post/:id', withAuth,  async (req, res) => {
  try {
  
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: [
            'username'
          ],
        },
      ],
    });

    const posts = dbPostData.get({ plain: true })
    // const posts = dbPostData.map(post => post.get({ plain: true }));

    res.render('edit-post', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);

  }
})







module.exports = router