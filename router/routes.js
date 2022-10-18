const router = require('express').Router();
const employee = require('../controller/employeecontroller');
//post
router.post('/employsave',employee.employeeadd);
//getall employees
router.get('/getallemploy',employee.employeefindall);
//get one employee
router.get('/getoneemployee/:id',employee.employeeFindByOne);
//delete one employee
router.delete('/deleteEmp/:id',employee.deleteEmployee);
//update employee
router.put('/updateEmploy/:id',employee.updateEmployee);


module.exports = router;