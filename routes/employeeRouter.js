const express = require('express');
const router = express.Router();

const {getEmployees, getEmployee, createEmployees,updateEmployees,deleteEmployees} = require('../controller/employeeController')

router.route('/employees').get(getEmployees).post(createEmployees)
router.route('/employees/:id').get(getEmployee).patch(updateEmployees).delete(deleteEmployees)


// router.get('/employees',getEmployees);
// router.get('/employees/:id',getEmployee);
// router.post('/employees',createEmployees);
// router.patch('/employees/:id',updateEmployees);
// router.delete('/employees/:id',deleteEmployees);

module.exports = router;