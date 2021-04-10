const { Router} = require('express')
const router = Router();
const BankController = require('../controllers/BankController')


const bodyParser = require('body-parser');
var jsonParser = bodyParser.json()

//Bank Controller
router.get('/get/customer',BankController.getCustomer);

//user
// router.post('/bookappointment' , jsonParser ,authControllers.BookAppointment);

module.exports = router;