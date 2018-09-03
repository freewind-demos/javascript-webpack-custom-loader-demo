module.exports = function (source) {
    return `
    module.exports = function() {
        const words = 'Hello, ${source} (from hello-loader.js)!'
        const node = document.createTextNode(words)
        document.body.appendChild(node)
    }
    `
}