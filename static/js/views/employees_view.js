import EMPLOYEES_TEMPLATE from '../../templates/employees';

export default Marionette.View.extend({
    el: '#app',
    template: EMPLOYEES_TEMPLATE,

    regions: {
        employeeList: '#employee_list',
        employeeManagement: '#employee_management'
    },

    onRender() {
        $('#sidebar a').removeClass('active');
        $('#sidebar #employees').addClass('active');
    }

});
