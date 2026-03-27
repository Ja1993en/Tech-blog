const router = require('express').Router();
const { User } = require('../../models')
const {Post} = require('../../models')


router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ 
            where: 
            { 
                username: req.body.username
             },
            });
console.log(userData);
        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.passcode);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' })
                return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id
            req.session.loggedIn = true;

            res
                .status(200)
                .json({ user: userData, message: 'You are now logged in!' });
        });
    } catch (err) {
        res.status(400).json(err)
    }
})

router.post('/signup', async (req, res) => {
try {

    const userData = await User.create({
        username: req.body.username,
        passcode: req.body.passcode,
      });

      console.log(userData);
      req.session.save(() => {
        req.session.user_id = userData.id
        req.session.loggedIn = true;

        res
            .status(200)
            .json({ user: userData, message: 'You are now logged in!' });
    });


}catch(err){
    console.log(err);
    res.status(500).json(err);
}

})


router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });


  router.put('/dashboard/update-post', async (req, res) => {
    try {
      if(!req.session.loggedIn){
        res.redirect('/');
      }
    
      res.render('edit-post')
    }catch(err){
      res.status(500).json(err);
    }
    
    })

module.exports = router