const router = require('express').Router();
const { User } = require('../../models')

router.get('/', async (req, res) => {
    res.send('Hello World');
});

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'Welcome to the Tech blog!'})
        })    
    } catch (err) {
        res.status(400).json(err)
    }

});

router.post('/login', async (req, res) =>{
    try {
        const userData = await User.findOne({ where: { username: req.body.username } });
        if(!userData) {
            res.json({ message: 'Incorrect Username'});
        } else {
            const validPassword = userData.checkPassword(req.body.password);

            if(!validPassword) {
                res.json({ message: 'Incorrect password'});
            } else {
                req.session.save(() => {
                    req.session.user_id = userData.id;
                    req.session.logged_in = true;
        
                    res.json({ user: userData, message: 'Welcome to the Tech blog!'})
                })
            }
           
        }
       
    } catch (error) {
        
    }
})

module.exports = router;