const m = require('mithril');

module.exports = (page, site, content) => ({
    view() {
        return m("html", [
            m("head", [
                m("title", `${page.hasOwnProperty('title') && page.title}${site.hasOwnProperty('title') ? " - " + site.title : ""}`),
                page.hasOwnProperty('stylesheet') ? m("style", { rel: "stylesheet", href: page.stylesheet }) : undefined,
                page.hasOwnProperty('style') ? m("style", { type: "text/css" }, page.style) : undefined
            ]),
            m("body", [
                m("div", { id: "page" }, m(content)),
                scripts.map(script => (m("script", { src: script })))
            ])
        ])
    }
})