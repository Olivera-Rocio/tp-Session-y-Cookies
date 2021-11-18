var express = require('express');
var router = express.Router();

const userValidation = require('../validations/userValidation');

const { index, users, logout, destroy} = require('../controllers/indexController');

/* GET home page. */
router.get('/', index);
router.post('/', userValidation, users);
router.get('/logout', logout);
router.get('/destroy', destroy);

module.exports = router;
