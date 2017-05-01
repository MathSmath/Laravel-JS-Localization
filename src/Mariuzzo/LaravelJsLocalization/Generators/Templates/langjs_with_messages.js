(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD support.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node support.
        module.exports = factory();
    } else {
        // Browser globals support.
        root.Lang = factory();
    }
}(this, function () {
    '{ langjs }';
    Lang = new Lang();
    Lang.setMessages('{ messages }');
    return Lang;
}));
