import EMPLOYEE_INFO_TEMPLATE from '../../templates/employee_info';

export default Marionette.View.extend({
    template: EMPLOYEE_INFO_TEMPLATE,

    ui: {
    	form: '#employee_info_form'
    },

    triggers: {
     	'submit @ui.form': 'update:employee'
    },

    onUpdateEmployee() {
    	this.model.set(this.ui.form.serializeObject());
    	this.model.save();
    }

});
