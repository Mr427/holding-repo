module.exports = function(api) {
    api.cache(true);
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
            }
        ],
        [
            "@babel/preset-react",
            {
            }
        ]
    ];
    const plugins = [
        "@babel/plugin-proposal-object-rest-spread"
    ];

    return {
        presets,
        plugins
    };
}