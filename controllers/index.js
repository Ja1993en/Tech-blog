const router = require('express').Router();

const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);

router.get('/login', async (req, res) => {
    try {
      res.render('all'); // Removed 'await'
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router 