/**
 * Requerimos "express" NO para crear un servidor sino para crear un "Enrutador"
 * el Enrutador no es mas que "un objeto que almacena las rutas", básicamente URL's,
 * las URL's que va a tener nuestro SERVIDOR.
 */
const { Router } = require('express');

/**
 * para poder usar el Enrutador tenemos que ejecutarlo como una función,
 * esto nos devuelve un objeto, que guardaremos en una constante para poder utilizarlo.
 */
const router = Router();

const employeesCtrl = require('../controllers/employees.controller');

router.get('/', employeesCtrl.getEmployees);
router.post('/', employeesCtrl.createEmployees);
router.get('/:id', employeesCtrl.getEmployee);
router.put('/:id', employeesCtrl.editEmployees);
router.delete('/:id', employeesCtrl.deleteEmployees);



module.exports = router;