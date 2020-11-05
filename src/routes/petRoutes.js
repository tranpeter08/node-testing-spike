const express = require('express');
const userController = require('../controllers/userController');
const petController = require('../controllers/petController');

const router = express.Router();

router.get('/t', async (req, res, next) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ message: 'Missing user_id parameter' });
    }

    const results = await petController.getAllByUserId(userId);
    res.status(200).json({ results });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
