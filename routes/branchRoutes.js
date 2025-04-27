const express = require("express");
const router = express.Router();
const { getBranches } = require("../controllers/branchController");

/**
 * @swagger
 * /api/branches:
 *   get:
 *     summary: Get list of branches
 *     parameters:
 *       - in: query
 *         name: searchBy
 *         schema:
 *           type: string
 *         description: Field to search by
 *       - in: query
 *         name: searchValue
 *         schema:
 *           type: string
 *         description: Value to search
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: Column to sort by
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: Sort order
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Rows per page
 *     responses:
 *       200:
 *         description: A list of branches
 */
router.get("/", getBranches);

module.exports = router;
