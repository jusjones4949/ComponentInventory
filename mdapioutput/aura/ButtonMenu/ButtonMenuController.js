({
    handleSelect: function (cmp, event, helper) {
        // This will contain the string of the "value" attribute of the selected
        // lightning:menuItem
        var selectedMenuItemValue = event.getParam("value");
        alert("Menu item selected with value: " + selectedMenuItemValue);
    },
    handleSelect2: function (cmp, event) {
        // This will contain the index (position) of the selected lightning:menuItem
        var selectedMenuItemValue = event.getParam("value");

        // Find all menu items
        var menuItems = cmp.find("menuItems");
        menuItems.forEach(function (menuItem) {
            // For each menu item, if it was checked, un-check it. This ensures that only one
            // menu item is checked at a time
            if (menuItem.get("v.checked")) {
                menuItem.set("v.checked", false);
            }
            // Check the selected menu item
            if (menuItem.get("v.value") === selectedMenuItemValue) {
                menuItem.set("v.checked", true);
            }
        });
    }
})