import EmployeeView from './employee_view';

export default Marionette.CollectionView.extend({
    childView: EmployeeView,
});
