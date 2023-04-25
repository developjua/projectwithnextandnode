const express = require('express');
const router = express.Router();

const {income,phoneprice,lastname,carbrand,topcities} = require('../controller/userController')

router.get('/users/income-lower-than-5-and-car-bmw-or-mercedes',income );
router.get('/users/male-phone-price-greater-than-10000',phoneprice)
router.get('/users/last-name-starts-with-m-and-quote-length-greater-than-15',lastname)
router.get('/users/car-brand-bmw-mercedes-or-audi-and-email-does-not-include-digit',carbrand)
router.get('/top-10-cities-with-highest-number-of-users-and-average-income',topcities)


module.exports = router;
