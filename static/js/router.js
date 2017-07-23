import INDEX_TEMPLATE from '../templates/index';

export default Backbone.Router.extend({

    routes: {
        '': 'index'
    },

    index: function() {
        const IndexView = Marionette.View.extend({
            template: INDEX_TEMPLATE
        });

        $('#app').append((new IndexView).render().el);
    }

});
