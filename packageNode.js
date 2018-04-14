require("browser-build").build({
    input: {
        "node_modules": "node_modules",
        // "sugar": true
    },
    output: {
        directory: "node_modules_package",
        webroot: "www",
    }
});