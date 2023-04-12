const {createVideogame, VideogameById,searchByName,getAllVideogames} = require("../controllers/videogamesController");


//1 NAME Y ALL
const getVideogamesHandler =  async (req, res) =>{
    const {name} = req.query;
    const results = name ? await searchByName(name) : await getAllVideogames();
    res.status(200).json(results);
}

//2 POR ID
const getIdVideogamesHandler = async(req, res) => {
    const {idVideogame} = req.params;
    const source = isNaN(idVideogame) ? "db" : "api";

    try {
        const videogame = await VideogameById(idVideogame,source);
        res.status(200).json(videogame);
    } catch (error) {
        res.status(400).json({error: error.message});
    }

    
}
//3 POST
const postVideogamesHandler = async (req, res) => {
    const {name, description, platforms, image, releasedAt, rating, genreIds} = req.body;
    try {
        const newVideogame = await createVideogame(name, description, platforms, image, releasedAt, rating, genreIds);
        res.status(201).json(newVideogame); 
    } catch (error) {
       res.status(400).json({error: error.message}); 
    }
}

//name, description, platforms, image, releasedAt, rating, genreIds

module.exports = {
    getIdVideogamesHandler,
    postVideogamesHandler,
    getVideogamesHandler,
}

