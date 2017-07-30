import TIMECARD_TEMPLATE from '../../templates/timecard';

export default Marionette.View.extend({
    template: TIMECARD_TEMPLATE,
    tagName: 'tr',
});
