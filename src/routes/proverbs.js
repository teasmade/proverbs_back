const express = require('express');
const connection = require('../../db-config');

const router = express.Router({
  mergeParams: true,
});

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

module.exports = router;
