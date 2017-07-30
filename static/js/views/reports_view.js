import REPORTS_TEMPLATE from '../../templates/reports';

export default Marionette.View.extend({
    el: '#app',
    template: REPORTS_TEMPLATE,

    regions: {
        activeReport: '#active_report',
    },

    onRender() {
    	$('#sidebar a').removeClass('active');
    	$('#sidebar #reports').addClass('active');
    },

});
