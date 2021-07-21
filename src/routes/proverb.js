const express = require('express');
const connection = require('../../db-config');

const router = express.Router({
  mergeParams: true,
});

router.get('/:id', (req, res) => {
  const sql = 'SELECT * FROM proverb WHERE id=?';
  connection.query(sql, [req.params.id], (dbErr, dbResults) => {
    if (dbErr) {
      console.error(dbErr);
      res.status(500).send('Error retrieving data');
    } else if (dbResults.length === 0) {
      res.status(404).send(`Proverb with ID: ${req.params.id} not found`);
    } else {
      res.status(200).json(dbResults[0]);
    }
  });
});

module.exports = router;
