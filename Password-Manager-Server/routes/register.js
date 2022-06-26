const express = require('express')
const router = express.Router();
const { checkSchema, body } = require('express-validator');
const authController = require('../controllers/authController');
const User = require('../models/user');

router.post(
    '/',authController.register
);

module.exports = router;