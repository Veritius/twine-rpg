Setting.addToggle("cheatsEnabled", {
    label    : "Enable cheats and developer tools.",
    default  : false,
    onChange : function () {
        UIBar.update()
    }
});