const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Gets all users
 *     tags:
 *     - users
 *     responses:
 *       '200':
 *         $ref: '#/components/responses/GetAllUsersResp'
 *       '400':
 *         $ref: '#/components/responses/ErrorRespBody'
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



// This route uses JSON formatting for documentation
/**
 * @swagger
 *  {
    "/api/users": {
      "post": {
        "summary": "Create a user",
        "tags": ["users"],
        "requestBody": {
          $ref: '#/components/requestBodies/UserCreateBody'
        },
        responses: {
          201: {
            $ref: '#/components/responses/CreateSuccessResp'
          }
        }
      }
    }
  }
 */
router.post('/', async function (req, res, next) {
  try {
    const result = await userController.create(req.body);
    res.status(201).json({ id: result._id });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
