const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const { TODOS_URL } = require('../config/urls');

router.get('/todos', async (req, res, next) => {
  try {
    const resp = await axios.get(TODOS_URL + '/todos');
    res.status(200).json(resp.data.slice(0, 10));
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
