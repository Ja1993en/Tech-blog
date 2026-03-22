const router = require('express').Router();


router.get('/', async (req, res) => {
    try {
       
        res.render('home')
    }catch (err) {
        res.status(500).json(err);
        
    }
})

router.get('/login', async (req, res) => {
    try {
      res.render('login'); // Removed 'await'
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.get('/signup', async (req, res) => {
    try {
      res.render('signup'); // Removed 'await'
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/dashboard', async (req, res) => {
    try {
      res.render('dashboard'); // Removed 'await'
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;