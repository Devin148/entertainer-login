import Employee from '../models/employee';

export default Backbone.Collection.extend({
    model: Employee,
    url: '/api/employees',
});