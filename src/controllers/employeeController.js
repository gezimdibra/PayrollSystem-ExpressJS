import * as employeeService from "../services/employeeService.js";

export const getCompanyEmployees = (req,res) => {

    try{
        const {companyId} = req.params;
        const employees =  employeeService.getEmployeesByCompany(companyId);

        res.status(200).json(employees);

    }catch (error) {
        res.status(500).json({ message: "Internal Server Error"});
    }

};

export const addEmployee = (req,res) => {
    try {
        const { companyId } = req.params;
        const employeeData = req.body;

        if(!employeeData.firstName){
            return res.status(404).json({message: "Missing Employee First Name"});
        }
        if(!employeeData.employmentType){
            return res.status(404).json({message: "Missing Employee Employment Type"});
        }

        const newEmployee = employeeService.addEmployee(companyId, employeeData);

        if (!newEmployee) {
            return res.status(404).json({ message: "Company not found" });
        }

        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};
