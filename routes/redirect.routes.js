const express = require('express');
const router = express.Router();

// import the controller
const redirectController = require('../controllers/redirect.controller');

// This route becomes: GET /:shortCode
router.get('/:shortCode', redirectController.redirectToLongUrl);

module.exports = router;