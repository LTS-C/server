var express = require('express');
var router = express.Router();
var block = require('../app/models/block');

router.route('/')

    .get(function(req, res) {
        let vblock = new block.Block(1, 'genesisHash', Date.now(), new Date(), 'blockHash', 1, 'miner',1);
        res.json(vblock);

    });

module.exports = router;