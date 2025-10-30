const express = require('express');
const router = express.Router();

// import the controller
const urlController = require('../controllers/url.controller');

router.post('/shorten',urlController.shortenUrl);


module.exports = router;