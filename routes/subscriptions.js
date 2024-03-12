var express = require('express');
var router = express.Router();
const SubscriptionsController = require('../controllers/Subscriptions')

router.get('/', SubscriptionsController.get);

module.exports = router;