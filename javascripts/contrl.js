routeApp.controller('RouteListCtl', function($scope) {
    $scope.listBtn = [{
        id: 'one',
        type: 'btn-default',
        name: 'Default'
    }, {
        id: 'two',
        type: 'btn-primary',
        name: 'Primary'
    }, {
        id: 'three',
        type: 'btn-success',
        name: 'Success'
    }, {
        id: 'four',
        type: 'btn-info',
        name: 'Info'
    }, {
        id: 'five',
        type: 'btn-warning',
        name: 'Warning'
    }, {
        id: 'six',
        type: 'btn-danger',
        name: 'Danger'
    }, {
        id: 'seven',
        type: 'btn-link',
        name: 'Link'
    }];
    $scope.listTable = [
        { id: 'one', type: '基本', name: '' },
        { id: 'two', type: '条纹', name: 'table-striped' },
        { id: 'three', type: '边框', name: 'table-bordered' },
        { id: 'four', type: '悬停', name: 'table-hover' },
        { id: 'five', type: '精简', name: 'table-condensed' }
    ]
});
routeApp.controller('RouteDropdownCtl', function($scope) {});
