const session = require('express-session');
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
    const posts = dbPostData.map((userPost) =>
      userPost.get({ plain: true })
    );

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

      const posts = dbPostData.get({ plain: true })

      res.render('single-post', {
        posts,
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

    const dbPostData = await Post.findAll({
      where: {
        author_id: req.session.user_id,
      },
      include: [{
        model: User,
        attributes:['username']
      }]
    });

    // const posts = dbPostData.get({ plain: true })
     const posts = dbPostData.map(post => post.get({ plain: true }));
  
console.log(posts)
      res.render('dashboard', {
        posts,
        loggedIn: req.session.loggedIn,
      });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/new-post', async (req,res) =>{
try {
  if(!req.session.loggedIn){
    res.redirect('/');
  }

res.render('create-post')
}catch(err){
  res.status(500).json(err);
}

})

module.exports = router;