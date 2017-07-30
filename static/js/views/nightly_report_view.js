import TimecardListView from './timecard_list_view';

import TimecardCollection from '../collections/timecard_collection';

import NIGHTLY_REPORT_TEMPLATE from '../../templates/nightly_report';

export default Marionette.View.extend({
    id: 'nightly_report',
    template: NIGHTLY_REPORT_TEMPLATE,

    regions: {
        timecardList: '#timecard_list'
    },

    ui: {
        form: '#nightly_report_form',
        datePicker: '#report_date',
    },

    triggers: {
        'submit @ui.form': 'populate:nightly'
    },

    getFormData() {
        return this.ui.form.serializeObject();
    },

    initDatePicker() {
        this.ui.datePicker.datepicker({
            dateFormat: 'yy-mm-dd',
        });
        this.ui.datePicker.datepicker('setDate', moment().toDate());
    },

    onRender() {
        this.initDatePicker();
        const timecardListView = new TimecardListView({
            collection: this.collection,
        });
        this.showChildView('timecardList', timecardListView);
        this.trigger('populate:nightly', this);
    },

});
