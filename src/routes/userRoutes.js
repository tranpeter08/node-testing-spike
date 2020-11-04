const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/a', async (req, res, next) => {
  try {
    const results = await userController.getAll();
    res.status(200).json({ results });
  } catch (error) {
    next(error);
  }
});

router.post('/create', async function (req, res, next) {
  try {
    const result = await userController.create(req.body);
    res.status(200).json({ result });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
