import EmployeeInfoView from './views/employee_info_view';
import EmployeeListView from './views/employee_list_view';
import EmployeePayrollView from './views/employee_payroll_view';
import EmployeesView from './views/employees_view';
import NightlyReportView from './views/nightly_report_view';
import ReportsView from './views/reports_view';

import EmployeeCollection from './collections/employee_collection';
import TimecardCollection from './collections/timecard_collection';

import Employee from './models/employee';

export default Backbone.Router.extend({

    routes: {
        '': 'employees',

        'employees': 'employees',
        'employees/:id': 'employeeInfo',
        'employees/:id/payroll': 'employeePayroll',

        'reports': 'nightlyReport',
        'reports/nightly': 'nightlyReport',
    },

    initialize() {
        this.employeesView = new EmployeesView();
        this.reportsView = new ReportsView();

        this.employees = new EmployeeCollection();
        this.employees.fetch();
    },

    fetchEmployees() {
        return this.employees.fetch();
    },

    employees() {
        const employeeListView = new EmployeeListView({ collection: this.employees });

        this.fetchEmployees()
            .then(() => {
                this.employeesView.render();
                this.employeesView.showChildView('employeeList', employeeListView);
            });
    },

    employeeInfo(id) {
        const employeeListView = new EmployeeListView({ collection: this.employees });
        const employee = this.employees.findWhere({ id: parseInt(id) });
        const employeeInfoView = new EmployeeInfoView({ model: employee });

        this.fetchEmployees()
            .then(() => {
                this.employeesView.render();
                this.employeesView.showChildView('employeeList', employeeListView);
                this.employeesView.showChildView('employeeManagement', employeeInfoView);
            });
    },

    employeePayroll(id) {
        const employeeListView = new EmployeeListView({ collection: this.employees });
        const employee = this.employees.findWhere({ id: parseInt(id) });
        const employeePayrollView = new EmployeePayrollView({ model: employee });

        this.fetchEmployees()
            .then(() => {
                this.employeesView.render();
                this.employeesView.showChildView('employeeList', employeeListView);
                this.employeesView.showChildView('employeeManagement', employeePayrollView);
            });
    },

    nightlyReport() {
        const collection = new TimecardCollection();
        const nightlyReportView = new NightlyReportView({ collection });

        nightlyReportView.on('populate:nightly', (view) => {
            const data = view.getFormData();
            view.collection.fetch({ data });
        });

        this.reportsView.render();
        this.reportsView.showChildView('activeReport', nightlyReportView);
    },

});
