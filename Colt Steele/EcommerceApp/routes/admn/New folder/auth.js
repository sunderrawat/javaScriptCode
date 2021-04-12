const express = require('express');

const {handleErrors} = require('./middlewares');
const usersRepo = require('../../repository/users');
const signupTemp = require('../../views/admin/auth/signup');
const signinTemp = require('../../views/admin/auth/signin');
const { requireEmail, requirePassword, requirePasswordConfirm, requireEmailExist, requireVaidPasswordFor} = require('./vaildators');

const router = express.Router();

router.get('/signup', (req, res) => {
    res.send(signupTemp({ req }));
});

router.post('/signup',
[requireEmail, requirePassword, requirePasswordConfirm], handleErrors(signupTemp),
async (req, res) => {
    const { email, password } = req.body;
    const user = await usersRepo.create({ email, password });
    req.session.userID = user.id;

    res.redirect('/admin/products');
});

router.get('/signout', (req, res) => {
    req.session = null;
    res.send('you are logged out');
});

router.get('/signin', (req, res) => {
    res.send(signinTemp({}));
});

router.post('/signin',[ requireEmailExist, requireVaidPasswordFor ], handleErrors(signinTemp),
async (req, res) => {
    const { email} = req.body;
    const user = await usersRepo.getOneBy({ email });
    if (!user){
        return res.send( 'Email not found' );
    }
    req.session.userID = user.id;
    res.redirect('/admin/products');

});

module.exports = router;