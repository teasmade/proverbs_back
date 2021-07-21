// CamelCase disabled as there's a conflict between sql field and JS variable naming conventions
// TODO: some kind of name parser to resolve this?
/* eslint-disable camelcase */
const express = require('express');
const connection = require('../../db-config');

const router = express.Router({
  mergeParams: true,
});

// get all proverbs
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM proverb';
  connection.query(sql, (dbErr, dbResults) => {
    if (dbErr) {
      console.error(dbErr);
      res.status(500).send('Error retrieving data');
    } else {
      res.status(200).json(dbResults);
    }
  });
});

// create one proverb
router.post('/', (req, res) => {
  const { orig_lang, proverb_text, proverb_date, proverb_author } = req.body;
  console.log(orig_lang);
  const sql =
    'INSERT INTO proverb(orig_lang, proverb_text, proverb_date, proverb_author) VALUES (?, ?, ?, ?)';
  connection.query(
    sql,
    [orig_lang, proverb_text, proverb_date, proverb_author],
    (dbErr, dbResults) => {
      if (dbErr) {
        console.error(dbErr);
        res.status(500).send('Error saving proverb');
      } else {
        const id = dbResults.insertId;
        const createdProverb = {
          id,
          orig_lang,
          proverb_text,
          proverb_date,
          proverb_author,
        };
        res.status(201).send(createdProverb);
      }
    }
  );
});

module.exports = router;
