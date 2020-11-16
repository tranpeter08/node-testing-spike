const express = require('express');
const userRouter = require('./userRoutes');
const petRouter = require('./petRoutes');
const thirdPartyRouter = require('./thirdPartyRoutes');
const apiDocsRoutes = require('./apiDocsRoutes');

const router = express.Router();

router.use('/users', userRouter);
router.use('/pets', petRouter);
router.use('/3rd-party-api', thirdPartyRouter);
router.use('/docs', apiDocsRoutes);

module.exports = router;
