const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Gets all users
 *     responses:
 *       '200':
 *         description: Responds with an array of users
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
 *       '400':
 *         description: Bad request
 *         content: 
 *           application/json:
 *             schema: 
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Invalid ID
 *            
 */
router.get('/', async (req, res, next) => {
  try {
    const results = await userController.getAll();
    res.status(200).json({ results });
  } catch (error) {
    next(error);
  }
});


/**
 * @swagger
 * {
 *  "/api/users/create": {
 *    "post": {
 *       "summary": "Create a user"
 *    }
 *  }
 * }
 */
router.post('/create', async function (req, res, next) {
  try {
    const result = await userController.create(req.body);
    res.status(201).json({ id: result._id });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
