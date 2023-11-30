const express = require('express');
const {
    addTransection,
    getAllTransection
} = require('../controllers/transectionController');
const router = express.Router();

router.route('/add-transection').post(addTransection);
router.route('/get-transection').post(getAllTransection);

module.exports = router;