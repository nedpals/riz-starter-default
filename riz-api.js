const m = require('mithril');
const path = require('path');
const axios = require('axios').default;

exports.fetchData = async function() {
    const studioGhibli = { films: [] };
    const response = await axios.get('http://ghibliapi.herokuapp.com/films');

    studioGhibli.films = response.data;

    return { studioGhibli };
}

exports.fetchRoutes = async (actions, data) => {
    const { addRoute } = actions;
    const { studioGhibli } = data;

    studioGhibli.films.forEach(f => {
        addRoute({
            path: `/films/${f.id}`,
            component: "film.js",
            client: false,
            contexts: {
                id: f.id
            }
        });
    });
};