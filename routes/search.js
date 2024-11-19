const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

router.get('/', searchController.renderSearchPage);
router.post('/results', searchController.performSearch);

module.exports = router;