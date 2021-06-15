const express = require('express');
const router = express.Router();
const controller = require('../../controllers/usersController');

router.post('/register', controller.registerUser);
// router.put('/:id',controller.updateUserById);
router.post('/login', controller.loginUser);

module.exports = router;