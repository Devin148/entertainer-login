import Timecard from '../models/timecard';

export default Backbone.Collection.extend({
    model: Timecard,
    url: '/api/timecards',
});
