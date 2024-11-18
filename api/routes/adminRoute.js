const express = require('express');
const { isAuthenticatedUser, authorizedProfile } = require('../middlewares/auth');
const { allUsers } = require('../controllers/adminController');
const router = express.Router();
//use api/v1/admin
//router.get('/users', isAuthenticatedUser, authorizedProfile, allUsers);
/**
 * @swagger
 * /allUsers:
 *   get:
 *     summary: Retrieve a list of all users
 *     tags: 
 *       - Admin
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized access
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Unauthorized access
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Internal server error
 */
router.get('/users', isAuthenticatedUser, authorizedProfile, allUsers);
module.exports = router;