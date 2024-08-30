const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');

const router = express.Router();

// Route for user registration
router.post('/register', registerUser);
router.get('/login',loginUser);
module.exports = router;