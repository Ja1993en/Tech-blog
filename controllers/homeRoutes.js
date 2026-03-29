const session = require('express-session');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
const router = require('express').Router();


router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username']
        },
      ],
    });
    // console.log(dbPostData)
    const posts = dbPostData.map((userPost) =>
      userPost.get({ plain: true })
    );

    console.log()
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);

  }
})


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
  
});


router.get('/signup', async (req, res) => {
  try {
    res.render('signup');
  } catch (err) {
    res.status(500).json(err);
  }
});





router.get('/post/:id', withAuth, async (req, res) => {
  try {
    // if (!req.session.loggedIn) {
    //   res.redirect('/login');
    //   return;
    // }
  
  const dbPostData = await Post.findByPk(req.params.id, {
    include: [
      {
        model: User,
        attributes: ['username'],
      },
      {
        model: Comment,
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      },
    ],
  });
  const posts = dbPostData.get({ plain: true })
  console.log(posts)
  res.render('single-post', {
    posts,
    loggedIn: req.session.loggedIn,
  })
  }catch(err){
    res.status(500).json(err)
  }
})

module.exports = router;