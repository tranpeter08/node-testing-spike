const express = require('express');
const userController = require('../controllers/userController');
const petController = require('../controllers/petController');

const router = express.Router();

/**
 * @swagger
 * /api/pets:
 *   get:
 *     summary: 'Gets all pets by user id'
 *     parameters:
 *       - in: query
 *         name: 'userId'
 *         required: true
 *         schema:
 *           type: string
 *           example: '5fb37b8672c339da1f6a487d'
 *     tags:
 *       - pets
 *     responses:
 *       '200':
 *         description: Responds with an array of pets
 *         content: 
 *           application/json:
 *             schema: 
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       username:
 *                         type: string
 *       '400':
 *         description: Bad request
 *         content: 
 *           application/json:
 *             schema: 
 *               $ref: '#/components/schemas/ErrorResp'
 *            
 */
router.get('/', async (req, res, next) => {
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


/**
 * 
 * @swagger
 * /api/pets:
 *   post:
 *     summary: 'Creates a pet'
 *     parameters:
 *       - $ref: '#/components/parameters/userIdQueryParam'
 *     tags:
 *       - pets
 *     requestBody:
 *       description: 'Request body for creating a pet'
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PetsReqBodyCreate'
 *     responses:
 *       '201':
 *         description: Responds with the pet ID
 *         content: 
 *           application/json:
 *             schema: 
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: '5fb37c34714abfda5e39df9b'
 *                  
 *                 
 *       
 */
router.post('/', async (req, res, next) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ message: 'Missing user_id parameter' });
    }

    const petDoc = await petController.create({userId, ...req.body});
    res.status(201).json({id: petDoc._id});

  } catch (error) {
    next(error);
  }
});

module.exports = router;
