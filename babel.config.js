module.exports = function() {
    const presets = [
        [
            "@babel/preset-env",
            {
                targets: {
                    edge: "17",
                    firefox: "63",
                    chrome: "70",
                    safari: "12"
                },
                useBuiltIns: "usage",
            },
            "@babel/preset-react",
            {
            }
        ],
    ];
    const plugins = ["transform-object-rest-spread"];

    return {
        presets,
        plugins
    };
}