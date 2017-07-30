import TimecardView from './timecard_view';

import TIMECARD_LIST_TEMPLATE from '../../templates/timecard_list';

const TimecardTableBodyView = Marionette.CollectionView.extend({
    tagName: 'tbody',
    childView: TimecardView,
});

export default Marionette.View.extend({
    tagName: 'table',
    template: TIMECARD_LIST_TEMPLATE,

    onRender() {
        const timecardTableBodyView = new TimecardTableBodyView({
            collection: this.collection,
        });

        timecardTableBodyView.render();
        this.$el.append(timecardTableBodyView.$el);
    },

});
