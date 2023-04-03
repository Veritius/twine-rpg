Setting.addToggle("cheatsEnabled", {
    label    : "Enable cheats and developer tools.",
    default  : false,
    onChange : function () {
        UIBar.update()
    }
});

Setting.addToggle("lowViolence", {
    label   : "Reduce the impact of violence",
    default : false
});