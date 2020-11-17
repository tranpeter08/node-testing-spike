const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Gets all users
 *     tags:
 *       - users
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
 *                       username:
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
 *  {
    "/api/users": {
      "post": {
          "summary": "Create a user",
          "tags": ["users"],
          "requestBody": {
            required: true,
            content: {
              "application/json":{
                schema: {
                  type: 'object',
                  properties: {
                    username: {
                      type: 'string',
                      example: 'SuperMario',
                    }
                  },
                  required: [
                    'username'
                  ]
                }
              }
            }
          },
          responses: {
            200: {
              description: 'Success!',
              content: {
                "application/json":{
                  schema: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                        example: '5fb37b8672c339da1f6a487d'
                      }
                    }
                  }
                }
              }
            }
          }
      }
    }
  }
 */


const t = 
  {
    "/api/users": {
      "post": {
          "summary": "Create a user",
          "requestBody": {
            required: true,
            content: {
              "application/json":{
                schema: {
                  type: 'object',
                  properties: {
                    username: {
                      type: 'string',
                      example: 'SuperMario',
                    }
                  },
                  required: [
                    'username'
                  ]
                }
              }
            }
          },
          responses: {
            200: {
              description: 'Success!',
              content: {
                "application/json":{
                  schema: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string'
                      }
                    }
                  }
                }
              }
            }
          }
      }
    }
  }

router.post('/', async function (req, res, next) {
  try {
    const result = await userController.create(req.body);
    res.status(201).json({ id: result._id });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
