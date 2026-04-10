import { Router } from 'express';
import {
    getCompanyEmployees,
    addEmployee
} from '../controllers/employeeController.js';

const router = Router();

router.get('/companies/:companyId/employees', getCompanyEmployees);

router.post('/companies/:companyId/employees', addEmployee);

export default router;
