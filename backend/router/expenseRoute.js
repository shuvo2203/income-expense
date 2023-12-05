const express = require('express');
const { 
    addExpense, getAllExpenses, deleteExpense
 } = require('../controllers/expenseController');
const router = express.Router();

router.route('/addExpense').post(addExpense);
router.route('/getAllExpense').get(getAllExpenses);
router.route('/deleteExpense/:id').delete(deleteExpense);

module.exports = router;