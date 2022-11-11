const router = require('express').Router();
const { Post, Comment, User } = require('../models/');
const { post } = require('./api');


router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll({
        include: [
          {
            model: User,
          },
        ],
      });
  
    res.render('all-posts', {
        postData
    } )
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.get('/login', async (req, res) => {
 try {
  res.render('login') 
 } catch (err) {
    res.status(400).json(err);
  }
})

  module.exports = router;