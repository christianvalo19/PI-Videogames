const {getGenres} = require("../controllers/genresController")
const {Genre} = require("../db");
const axios = require ("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getGenresHandler = async (req, res) => {
    const genresApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    const genres = genresApi.data.results.map((genre) => ({name: genre.name}));
    const genresEach = genres.map(el => {
    return el.name;    
    })
    genresEach.forEach(el => {
        Genre.findOrCreate({
            where: {name: el}
        }) 
    });
    const allGenres = await Genre.findAll();
    res.send(genresEach);
    
    }
module.exports = {getGenresHandler}