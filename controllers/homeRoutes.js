const { Post, User } = require('../models');

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
    const post = dbPostData.map((userPost) =>
      userPost.get({ plain: true })
    );

    res.render('homepage', {
      post,
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
  res.render('login');
});


router.get('/signup', async (req, res) => {
  try {
    res.render('signup');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/home/post/:id', async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      res.redirect('/login');
      return;
    }
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

      const post = dbPostData.get({ plain: true })



      res.render('single-post', {
        post,
        loggedIn: req.session.loggedIn,
      });
    

  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/dashboard', async (req, res) => {
  try {

    if(!req.session.loggedIn){
      res.redirect('/login')
    }

    res.render('dashboard', { loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;