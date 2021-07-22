const express = require('express');

// import routes
const proverb = require('./proverb');
const proverbs = require('./proverbs');
const proverbtranslations = require('./proverbtranslations');
const translations = require('./translations');

// use routes
const router = express.Router();
router.use('/proverb', proverb);
router.use('/proverbs', proverbs);
router.use('/proverbtranslations', proverbtranslations);
router.use('/translations', translations);

module.exports = router;
