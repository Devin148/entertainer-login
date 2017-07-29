import EmployeeInfoView from './views/employee_info_view';
import EmployeeListView from './views/employee_list_view';
import EmployeePayrollView from './views/employee_payroll_view';
import EmployeesView from './views/employees_view';

import EmployeeCollection from './collections/employee_collection';

import Employee from './models/employee';

export default Backbone.Router.extend({

    routes: {
        '': 'employees',
        'employees': 'employees',
        'employees/:id': 'employeeInfo',
        'employees/:id/payroll': 'employeePayroll',
    },

    initialize() {
        this.employeesView = new EmployeesView();
        // this.reportView = new ReportView();

        this.employees = new EmployeeCollection();
        this.employees.fetch();
    },

    employees() {
        const employeeListView = new EmployeeListView({ collection: this.employees });

        this.employeesView.render();
        this.employeesView.showChildView('employeeList', employeeListView);
    },

    employeeInfo(id) {
        const employeeListView = new EmployeeListView({ collection: this.employees });
        const employee = this.employees.findWhere({ id: parseInt(id) });
        const employeeInfoView = new EmployeeInfoView({ model: employee });

        this.employeesView.render();
        this.employeesView.showChildView('employeeList', employeeListView);
        this.employeesView.showChildView('employeeManagement', employeeInfoView);
    },

    employeePayroll(id) {
        const employeeListView = new EmployeeListView({ collection: this.employees });
        const employee = this.employees.findWhere({ id: parseInt(id) });
        const employeePayrollView = new EmployeePayrollView({ model: employee });

        this.employeesView.render();
        this.employeesView.showChildView('employeeList', employeeListView);
        this.employeesView.showChildView('employeeManagement', employeePayrollView);
    }
});
