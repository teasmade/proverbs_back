const express = require('express');

// import routes
const proverb = require('./proverb');
const proverbs = require('./proverbs');

// use routes
const router = express.Router();
router.use('/proverb', proverb);
router.use('/proverbs', proverbs);

module.exports = router;
