const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index');
})

router.post('/register', (req, res) => {
//req.flash('user', req.body)
    req.flash('success', 'now you are registered')
    res.redirect('profile');
})

router.get('/profile', (req, res) => {
    res.render('profile');
})

router.get('/products', (req, res) => {
    res.render('/products')
})

module.exports = router;