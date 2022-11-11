const router = require('express').Router();
const { Post } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll({
        include: [
          {
            model: User,
          },
        ],
      });
  
    res.render('all-posts-admin', {
        layout: 'dashboard',
        postData,
    } )
    } catch (err) {
      res.redirect('login');
    }
  });

module.exports = router;
