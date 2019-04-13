const m = require('mithril');

module.exports = ({data, contexts: { id }}) => ({
    page: {},
    film: {},
    layout: 'default',
    oninit() {
        this.film = data.studioGhibli.films.find(f => f.id === id);
        this.page.title = this.film.title;
    },
    view() {
        return [
            m("div", [
                m("h1", this.film.title),
                m("p", JSON.stringify(this.film.description))
            ])
        ]
    }
})