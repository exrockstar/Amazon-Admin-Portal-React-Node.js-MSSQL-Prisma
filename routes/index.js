var express = require('express');
var router = express.Router();
const Subscriptions = require('./subscriptions')

router.use('/subscriptions', Subscriptions);

module.exports = router;