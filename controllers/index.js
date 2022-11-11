const router = require('express').Router();
// const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const dashRoutes = require('./dashRoutes');
router.use ('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/', dashRoutes);

module.exports = router;