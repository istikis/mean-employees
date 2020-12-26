/**
 * De esta manera guardamos todo dentro de un objeto para al momento de exportar
 * solo exportamos el Object.
 */
const employeesCtrl = {};

const Employee = require('../models/Employee');

//GET ALL
employeesCtrl.getEmployees = async(req, res) => {
    /**
     * Devuelve un arreglo con todos los empleados guardados en la base de datos
     * por lo que lo guardamos en una constante que es lo que estaremos
     * devolviendo al FrontEnd
     */
    const employees = await Employee.find()
    res.json(employees);
}

//CREATE
employeesCtrl.createEmployees = async(req, res) => {
    // para crear un dato lo primero es recibirlo
    const newEmployee = new Employee(req.body)
    await newEmployee.save();
    res.send({ message: 'Employee Created!' })
}

//GET BY ID
employeesCtrl.getEmployee = async(req, res) => {
    const employee = await Employee.findById(req.params.id)
    res.send(employee)
}

//UPDATE
employeesCtrl.editEmployees = async(req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({ status: 'Employee Updated!' })
}

//DELETE
employeesCtrl.deleteEmployees = async(req, res) => {
    await Employee.findByIdAndDelete(req.params.id)
    res.json({ status: 'Employee is Deleted!' })
}


module.exports = employeesCtrl;