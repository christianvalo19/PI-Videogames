const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const videogamesRouter = require("./videogames");
const genresRouter = require ("./genre")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", (req,res) => {
    res.send("Estoy en la principal del router");
});

router.use("/videogames", videogamesRouter);
router.use("/genres", genresRouter);


module.exports = router;
