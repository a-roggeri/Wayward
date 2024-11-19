const express = require('express');
const router = express.Router();
const streamController = require('../controllers/streamController');

router.get('/:magnet', streamController.streamTorrent);

module.exports = router;