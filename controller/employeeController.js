const Employees = require("../models/employees")


//get all employees /employees
const getEmployees = (req, res) => {
    Employees.find().then((data) => {
        // res.status(200).json({data})
        res.status(200).render('index', {employees: data});
    }).catch((err) => {console.log(err)})
    
};

//get a single employee /employees/:id -req.params
const getEmployee = (req, res) => {
    const {id} = req.params
    Employees.findById({_id: id}).then((data) => {
        // res.status(200).json({data})
        res.status(200).render('details', {employee: data});
    }).catch((err) => {console.log(err)});
};

//create a new employee /employees req.body middleware
const createEmployees = (req, res) => {
    const { name, role, age } = req.body;
    const employee =new Employees(req.body);
    employee.save().then((data) => {
        //res.status(201).json({msg: "Employees created", data});
        res.redirect('/employees');
    }).catch((err) => {
        console.log(err);
    });
}

//update a employee /employees/:id params body
const updateEmployees = (req, res) => {
    const {id} = req.params
    Employees.findByIdAndUpdate({_id: id}, req.body, {new:true, runValidators: true,})
    .then((data) => {
        res.status(200).json({msg: "employees updated successfully", data})
    }).catch((err) => {
        console.log(err);
    })
}
//delete an employee /employees/:id params
const deleteEmployees = (req, res) => {
    const {id} = req.params;
    Employees.findByIdAndDelete({_id: id}).then((data) => {
        res.status(200).json({redirect: '/employees'});
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = {getEmployees, getEmployee, createEmployees, updateEmployees, deleteEmployees}