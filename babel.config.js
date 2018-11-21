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
                },
                useBuiltIns: "usage",
            },
        ],
    ];
    const plugins = ["transform-object-rest-spread"];

    return {
        presets,
        plugins
    };
}