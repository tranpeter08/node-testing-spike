const express = require('express');
const userRouter = require('./userRoutes');
const petRouter = require('./petRoutes');

const router = express.Router();

router.use('/users', userRouter);
router.use('/pets', petRouter);

module.exports = router;
