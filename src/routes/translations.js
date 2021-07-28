// CamelCase disabled as there's a conflict between sql field and JS variable naming conventions
// TODO: some kind of name parser to resolve this?
/* eslint-disable camelcase */
const express = require('express');
const connection = require('../../db-config');

const router = express.Router({
  mergeParams: true,
});

// create one translation
router.post('/', (req, res) => {
  const { trans_lang, trans_text, trans_date, trans_author, proverb_id } =
    req.body;
  const sql =
    'INSERT INTO translation(trans_lang, trans_text, trans_date, trans_author, proverb_id) VALUES (?, ?, ?, ?, ?)';
  connection.query(
    sql,
    [trans_lang, trans_text, trans_date, trans_author, proverb_id],
    (dbErr, dbResults) => {
      if (dbErr) {
        console.error(dbErr);
        res.status(500).send('Error saving translation');
      } else {
        const id = dbResults.insertId;
        const createdProverb = {
          id,
          trans_lang,
          trans_text,
          trans_date,
          trans_author,
          proverb_id,
        };
        res.status(201).send(createdProverb);
      }
    }
  );
});

module.exports = router;
