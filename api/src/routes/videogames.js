const { Router } = require('express');
const   {getVideogamesHandler,
         getIdVideogamestHandler,
         postVideogamesHandler,
        } = require ("../handlers/videogamesHandlers")
const videogamesRouter = Router();

videogamesRouter.get("/", getVideogamesHandler);
videogamesRouter.get("/:idVideogame",getIdVideogamestHandler);
videogamesRouter.post("/",postVideogamesHandler);

module.exports = videogamesRouter;