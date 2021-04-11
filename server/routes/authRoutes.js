const { Router} = require('express')
const router = Router();
const BankController = require('../controllers/BankController')


const bodyParser = require('body-parser');
var jsonParser = bodyParser.json()

//Bank Controller
router.get('/get/customer',BankController.getCustomer);
router.get('/get/transaction',BankController.getTransaction );
router.post('/sendMoney' , jsonParser ,BankController.sendMoney);

module.exports = router;