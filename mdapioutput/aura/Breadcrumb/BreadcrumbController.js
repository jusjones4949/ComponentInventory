({
    navigateToCustomPage1: function (cmp, event) {
        event.preventDefault();
        //your custom navigation here
    },
    navigateToCustomPage2: function (cmp, event) {
        event.preventDefault();
        //your custom navigation here
    },
    init: function (cmp, event, helper) {
        var myBreadcrumbs = [
            {label: 'Account', name: 'objectName' },
            {label: 'Record Name', name: 'record' }
        ];
        cmp.set('v.myBreadcrumbs', myBreadcrumbs);
    },
    navigateTo: function (cmp, event, helper) {
        //get the name of the breadcrumb that's clicked
        var name = event.getSource().get('v.name');

        //your custom navigation here
    }
})