module.exports = function() {
    const presets = [
        [
            "@babel/env",
            {
                targets: {
                    edge: "17",
                    firefox: "63",
                    chrome: "70",
                    safari: "12"
                }
            }
        ]
    ];
    const plugins = [];

    return {
        presets,
        plugins
    };
}