const express = require('express');

// import routes
const proverb = require('./proverb');
const proverbs = require('./proverbs');
const proverbtranslations = require('./proverbtranslations');

// use routes
const router = express.Router();
router.use('/proverb', proverb);
router.use('/proverbs', proverbs);
router.use('/proverbtranslations', proverbtranslations);

module.exports = router;
