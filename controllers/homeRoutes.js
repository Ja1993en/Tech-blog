const {Post, User} = require('../models');

const router = require('express').Router();


router.get('/', async (req, res) => {
    try {
       const dbPostData = await Post.findAll({
        include: { model: User},
       })
      
       const post =  dbPostData.map((post) => {
         post.get({plain: true})
       })

      //  console.log(dbPostData);
       res.render('homepage', {
         post,
        loggedIn: req.session.loggedIn,
      });
    }catch (err) {
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

  router.get('/dashboard', async (req, res) => {
    try {
    

      res.render('dashboard', {loggedIn: req.session.loggedIn});


    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;