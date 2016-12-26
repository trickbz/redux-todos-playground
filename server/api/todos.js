var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    return req.json([]);
});

module.exports = router;