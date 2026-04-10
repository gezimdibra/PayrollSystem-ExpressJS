export const companies = [
    {
        id: "comp_001", // PK
        name: "microsoft",
        createdAt: new Date("2024-01-01"),
    },
    {
        id: "comp_002",
        name: "apple",
        createdAt: new Date("2024-01-02"),
    },
];

export const employees = [
    {
        id: "emp_001",
        companyId: "comp_001", // 🔑 Foreign key relationship

        firstName: "Jane",
        lastName: "Doe",
        email: "jane@acme.com",

        employmentType: "SALARIED", // or "HOURLY"

        compensation: {
            // 💡 polymorphic pay structure
            annualSalary: 120000,
            hourlyRate: null,
        },

        payroll: {
            currency: "USD",
            paySchedule: "BIWEEKLY", // WEEKLY | BIWEEKLY | MONTHLY
            taxProfileId: "tax_001",
        },

        status: "ACTIVE", // ACTIVE | INACTIVE | TERMINATED

        createdAt: new Date("2024-03-01"),
    },
    {
        id: "emp_002",
        companyId: "comp_001",

        firstName: "John",
        lastName: "Smith",
        email: "john@acme.com",

        employmentType: "HOURLY",

        compensation: {
            annualSalary: null,
            hourlyRate: 45,
        },

        payroll: {
            currency: "USD",
            paySchedule: "WEEKLY",
            taxProfileId: "tax_002",
        },

        status: "ACTIVE",

        createdAt: new Date("2024-03-10"),
    },

    {
        id: "emp_003",
        companyId: "comp_002",

        firstName: "Ava",
        lastName: "Chen",
        email: "ava@globex.com",

        employmentType: "SALARIED",

        compensation: {
            annualSalary: 95000,
            hourlyRate: null,
        },

        payroll: {
            currency: "USD",
            paySchedule: "MONTHLY",
            taxProfileId: "tax_003",
        },

        status: "ACTIVE",

        createdAt: new Date("2024-04-01"),
    },

];


