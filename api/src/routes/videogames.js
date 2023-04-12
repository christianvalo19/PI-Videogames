const { Router } = require('express');
const   {getVideogamesHandler,
         getIdVideogamesHandler,
         postVideogamesHandler,
        } = require ("../handlers/videogamesHandlers")
const videogamesRouter = Router();

const validate = (req, res, next) => {
        const {name, description, platforms, image, releasedAt, rating, genreIds} = req.body;
        if (!name || !description || !platforms || !image || !releasedAt || !rating || !genreIds) 
                res.status(400).json({error: "faltan datos"});
next();
}

videogamesRouter.get("/", getVideogamesHandler);
videogamesRouter.get("/:idVideogame",getIdVideogamesHandler);
videogamesRouter.post("/", validate, postVideogamesHandler);

module.exports = videogamesRouter;