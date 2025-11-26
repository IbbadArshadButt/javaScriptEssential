const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Recruitment' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Tax' },
    { id: 4, name: 'Charlie Brown', age: 24, department: 'IT', salary: 55000, specialization: 'JavaScript' },
    { id: 5, name: 'Diana Prince', age: 32, department: 'IT', salary: 70000, specialization: 'Python' }
];

// Function to display all employees
function displayEmployees() {
    const totalEmployees = employees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} (${employee.specialization}) - $${employee.salary}</p>`)
        .join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

// Function to calculate total salaries (unchanged)
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

// Function to display HR employees
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} (${employee.specialization}) - $${employee.salary}</p>`)
        .join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

// Function to find employee by ID
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} (${foundEmployee.specialization}) - $${foundEmployee.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}

// Function to display employees specialized in JavaScript
function displayJSEmployees() {
    // Use the .filter() method to create a new array containing only JS specialists
    const jsEmployees = employees.filter(employee => employee.specialization === 'JavaScript');

    if (jsEmployees.length > 0) {
        // Use the .map() method to format the output for display
        const jsEmployeesDisplay = jsEmployees
            .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} (${employee.specialization}) - $${employee.salary}</p>`)
            .join(''); // Use .join('') to combine the array of strings into one string

        document.getElementById('employeesDetails').innerHTML = jsEmployeesDisplay;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'No employees specialize in JavaScript.';
    }
}