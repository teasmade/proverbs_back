// this route is a bit particular, we send an array of results as it's the translations that correspond to one proverb (via its id); we also send a not-found message instead of throwing a 404 for empty results, because we want to work with the "nothing found" state in the front.

const express = require('express');
const connection = require('../../db-config');

const router = express.Router({
  mergeParams: true,
});

router.get('/:id', (req, res) => {
  const sql = 'SELECT * FROM translation WHERE proverb_id=?';
  connection.query(sql, [req.params.id], (dbErr, dbResults) => {
    if (dbErr) {
      console.error(dbErr);
      res.status(500).send('Error retrieving data');
    } else if (dbResults.length === 0) {
      res.status(200).send([
        {
          emptyMessage: `Translations for proverb with ID: ${req.params.id} not found`,
        },
      ]);
    } else {
      res.status(200).json(dbResults);
    }
  });
});

module.exports = router;
