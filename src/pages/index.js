const m = require('mithril');

module.exports = ({ data }) => {
    return {
        films: {},
        page: {
            title: "Index page",
            style: `
                div {
                    margin: 0 auto;
                    text-align: center;
                }
            `
        },
        oninit() {
            this.films = data.studioGhibli.films.map(f => ({ id: f.id, title: f.title }));
        },
        view() {
            return m("div", [
                m("h1", "Studio Ghibli films"),
                m("ul", [
                    ...this.films.map(film => {
                        return m("li", m("a", { href: `./films/${film.id}/` }, film.title));
                    }),
                    m("li", m("a", { href: "./about/" }, "About"))
                ])
            ]);
        }
    }
}