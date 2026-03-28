const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const api = require('./api')
const dashboardRoutes = require('./dashboardRoutes')


router.use('/', homeRoutes);
router.use("/api", api)
router.use('/dashboard', dashboardRoutes);

module.exports = router 