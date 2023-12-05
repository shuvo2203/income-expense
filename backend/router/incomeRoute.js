const express = require('express');
const { 
    addIncome, getAllIncome, deleteIncome 
} = require('../controllers/incomeController');
const router = express.Router();

router.route('/addIncome').post(addIncome);
router.route('/getAllIncome').get(getAllIncome);
router.route('/deleteIncome/:id').delete(deleteIncome);

module.exports = router;