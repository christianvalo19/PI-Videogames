/*
const {Videogame} = require("../db");
const axios = require ("axios");
require("dotenv").config();

const { API_KEY } = process.env;

const max_result = 15;


const createVideogame = async(title, image, summary, healthScore, anallyzedinstructions, diets) =>
await recipe.create({title, image, summary, healthScore, anallyzedinstructions, diets});

//1
//PRIMERA RUTA BYID:
const videogameById = async(idVideogame,source) => {
    switch (source) {
        case "api":
            const videogamesApiRaw = (await axios.get(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}`)
            ).data.results;
            const apiRecipes = cleanArray(recipeapiRaw);
            return apiRecipes;
        case "db":
            const recipedb = await recipe.findByPk(idRecipe);
            return recipedb;
            break;
    
        default:

            break;
    }
}

//2
//SEGUNDA RUTA VIDEOGAMES SIN NAME
const getAllVideogames = async() => {
    const videogamesDB = await getAllVideogamesDB();
    const videogamesAPI = await getAllVideogamesAPI();
    const videogames = [ ...videogamesDB, ...videogamesAPI];
    return videogames;
    };

    //FUNCION GETALLVIDEOGAMESDB
    const getAllVideogamesDB = async () => {
        const videogames = await Videogame.findAll({
          attributes: ['id','name','image','rating'],
          include: {
            model: Genre,
            attributes: ['id', 'name'],
            through: {
              attributes: []
            }
          }
        });
        return videogames;
        
      }
    //FUNCION GETALLVIDEOGAMESAPI
    const getAllVideogamesAPI = async () => {
        const promise1 =  axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40&page=1`);
        const promise2 =  axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40&page=2`);
        const promise3 =  axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40&page=3`);
    
        const videogamesApi = await Promise.all([promise1, promise2, promise3]).then( 
          (values) =>
         {
             return values[0].data.results
            .concat(values[1].data.results)
            .concat(values[2].data.results);
        });
    
        console.log(videogamesApi.length);
        return videogamesApi.map(
          (e) => ({
            id: e.id,
            name: e.name,
            rating: e.rating,
            image: e.background_image,
            genres: e.genres.map(
                                    (genre) => ({
                                      id: genre.id,
                                      name: genre.name
                                      })
                                  )
          }
          ))
      }


//3
//TERCERA RUTA VIDEOGAME POR QUERY
const searchByname = async(name) => {
      const videogames = name ? await getVideogamesByName(name) : await getAllVideogames();
      if  (videogames.length === 0){
        res.json({warning: "Could not find any videogame"})
      }
      else{
        res.json(videogames);
      }
}

    //getByName
    const getVideogamesByName = async (name) => {
        const videogamesDB = await getVideogamesByNameDB(name);
        if (videogamesDB.length < max_result) {
          const videogamesAPI = await getVideogamesByNameAPI(name, max_result - videogamesDB.length);
          const videogames = [ ...videogamesDB, ...videogamesAPI];
          return videogames;
        }
        else {
          return videogamesDB;
        }
        
      }




   //Limpiar array de los datos 
const cleanArray = (arr) =>
    arr.map((e) => {
        const steps = e.analyzedInstructions[0].steps.map((step) => ({
            number: step.number,
            step: step.step,
            length: step.length
            ? {number: step.length.number, unit: step.length.unit}
            : null,
            ingredients: "NIY",
        }));

        return {
            id: e.id,
            name: e.title,
            image: e.image,
            summary: e.summary,
            healthScore: e.healthScore,
            analyzedInstructions: steps,
            diets: e.diets,
            created: false,
            }
    });
    
    


module.exports = {createVideogame,videogameById, getAllVideogames, searchByname}

*/