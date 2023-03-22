const { Router } = require('express');
const   {getVideogamesHandler,
         getIdVideogamesHandler,
         postVideogamesHandler,
        } = require ("../handlers/videogamesHandlers")
const videogamesRouter = Router();

videogamesRouter.get("/", getVideogamesHandler);
videogamesRouter.get("/:idVideogame",getIdVideogamesHandler);
videogamesRouter.post("/",postVideogamesHandler);

module.exports = videogamesRouter;