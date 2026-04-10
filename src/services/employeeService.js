import { employees, companies } from "../models/mockData.js";

export const getEmployeesByCompany = (companyId) => {
    return employees.filter(emp => emp.companyId === companyId);
};

export const addEmployee = (companyId, employeeData) => {
    const companyExists = companies.find(c => c.id === companyId);

    if (!companyExists) {
        return null;
    }

    const newEmployee = {
        id: `emp_${Date.now()}`,
        companyId,
        ...employeeData,
        createdAt: new Date()
    };

    employees.push(newEmployee);

    return newEmployee;
};
