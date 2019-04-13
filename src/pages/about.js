const m = require('mithril');

module.exports = {
    page: {
        title: "About"
    },
    view() {
        return [
            m("h1", "testo"),
            m("p", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eveniet dolore laborum nulla dolorum fugiat labore laudantium asperiores! Recusandae aliquid possimus laborum veniam quis eveniet, laboriosam cumque id vel architecto maiores repellat!")    
        ]
    }
}