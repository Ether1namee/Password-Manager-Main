const express = require('express')
const router = express.Router();
const passwordController = require('../controllers/passwordController');

router.get('/:id',passwordController.getAllPassword);

module.exports = router;