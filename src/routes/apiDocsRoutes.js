const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerOptns = require('../documentation/swaggerConfig');

const swaggerSpec = swaggerJsDoc(swaggerOptns);

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerSpec));
router.get('/swagger.json', (req, res) => {
  return res.json(swaggerSpec);
})

module.exports = router;