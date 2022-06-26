const express = require('express')
const router = express.Router();

const loginRouter = require('./login');
const registerRouter = require('./register'); 
const addPassword = require('./addPassword');
const getPassword = require('./getPassword')

const defaultRoutes = [
    {
        path: '/login',
        router: loginRouter
    },
    {
        path: '/register',
        router: registerRouter
    },
    {
        path: '/addPassword',
        router: addPassword
    },
    {
        path: '/getPasswords',
        router: getPassword
    }
]

defaultRoutes.forEach((val) => {
    router.use(val.path, val.router);
});

module.exports = router;