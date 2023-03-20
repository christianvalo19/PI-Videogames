//const {createVideogame, videogameById, getAllVideogames, searchByname} = require("../controllers/videogamesController");


//1
const getVideogamesHandler =  async (req, res) =>{
    /*
    const {name} = req.query;
    const results = name ? await searchByname(name) : await getAllVideogames();
    res.status(200).json(results);
    */
   res.send("get videogames");
}

//2
const getIdVideogamestHandler = async(req, res) => {
    const {idVideogame} = req.params;
    const source = isNaN(idVideogame) ? "db" : "api";
/*
    try {
        const videogame = await VideogameById(idVideogame,source);
        res.status(200).json(videogame);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    */
    res.send(`Estoy verificando la info de ${idVideogame}`);
}
//3
const postVideogamesHandler = async (req, res) => {
    /*
    const {name, description, platforms, image, releasedAt, rating, genreIds} = req.body;

    try {
        const newVideogame = await createVideogame(name, description, platforms, image, releasedAt, rating, genreIds);
        res.status(201).json(newRecipe); 
    } catch (error) {
       res.status(400).json({error: error.message}); 
    }
 */
res.send("post videogames");
}

module.exports = {
    getIdVideogamestHandler,
    postVideogamesHandler,
    getVideogamesHandler,
}

