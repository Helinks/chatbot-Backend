const express = require('express');
const controller = require('../controllers/webhook.controller')

const router = express.Router();

router.get('/', controller.verify);
router.post('/', controller.receive);

module.exports = router;
