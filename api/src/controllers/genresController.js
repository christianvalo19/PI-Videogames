const {Genre} = require("../models/genre");
const axios = require ("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getGenres = async () => {
    const genresApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    .data
    const genres = genresApi.data.results.map((genre) => ({name: genre.name}));
    return genres;
}

module.exports = {getGenres}