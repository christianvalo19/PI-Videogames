
const {Videogame, Genre} = require("../db");
const axios = require ("axios");
const { Op } = require("sequelize");
require("dotenv").config();

const { API_KEY } = process.env;




//1
//PRIMERA RUTA BYID:
const VideogameById = async(idVideogame,source) => {
  const videogame = 
  source==="api"
  ? (await axios.get (`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`))
  .data

  : await Videogame.findByPk(idVideogame, {
    include: {
      model: Genre,
    },
  });

  if (source==="api"){
    return {
      id: videogame.id,
      name: videogame.name,
      created: false,
      description: videogame.description,
      rating: videogame.rating,
      image: videogame.background_image,
      releasedAt: videogame.released,
      platforms: videogame.platforms.map(
        (platform) => (platform.platform.name)
      ).join(' - '),
      genres: videogame.genres.map(
        (genre) => ({
          id: genre.id,
          name: genre.name
          })
      )
    }
  }
  return videogame;
  }



//2
//SEGUNDA RUTA VIDEOGAMES SIN NAME
const getAllVideogames = async() => {
    const videogamesDB = await getAllVideogamesDB();
    const videogamesAPI = await getAllVideogamesAPI();
    return [ ...videogamesDB, ...videogamesAPI];
    };

    //FUNCION GETALLVIDEOGAMESDB
    const getAllVideogamesDB = async () => {
        const videogames = await Videogame.findAll({
          attributes: ['id','name', 'description','platforms','image','releasedAt','rating','created'],
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
    
        return videogamesApi.map(
          (e) => ({
            id: e.id,
            name: e.name,
            created: false,
            description: e.description,
            rating: e.rating,
            image: e.background_image,
            releasedAt: e.released,
            platforms: e.platforms.map(
              (platform) => (platform.platform.name)
            ).join(' - '),
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
const searchByName = async(name) => {
      const videogames = name ? await getVideogamesByName(name) : await getAllVideogames();
      return videogames;
}

    //getByName
    const getVideogamesByName = async (name) => {
        const videogamesDB = await getVideogamesByNameDB(name);
        const videogamesAPI = await getVideogamesByNameAPI(name);
        const videogames = [ ...videogamesDB, ...videogamesAPI];
        return videogames;
      }

      //byName DB
      const getVideogamesByNameDB = async (name) => {
  
        const videogames = await Videogame.findAll({
          where: {
            name: { [Op.iLike]: `%${name}%` }
          },
          attributes: ['id','name','image','rating'],
          //attributes: ['id','name', 'description','platforms','image','releasedAt','rating','created'],
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
      //byName API
      const getVideogamesByNameAPI = async (name) => {
      
        const videogamesApi = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);  
        return videogamesApi.data.results.slice(0,15).map(
          (e) => ({
            id: e.id,
            name: e.name,
            created: false,
            description: e.description,
            rating: e.rating,
            image: e.background_image,
            releasedAt: e.released,
            platforms: e.platforms.map(
              (platform) => (platform.platform.name)
            ).join(' - '),
            genres: e.genres.map(
                                    (genre) => ({
                                      id: genre.id,
                                      name: genre.name
                                      })
                                  )
          }
          ))
      }


//4
//CUARTA RUTA, CREAR VIDEOGAME

const createVideogame = async(name, description, platforms, image, releasedAt, rating,genreIds) => {
const videogameSinGenre = {name, description, platforms, image, releasedAt, rating,genreIds}
const videogameSinGenreCreated = await Videogame.create(videogameSinGenre);

const genres = await Promise.all(
  genreIds.map(async (genreId) => await Genre.findOne({
    where: {
      id: genreId
    }
  }))
);
const videogameFinal = await videogameSinGenreCreated.addGenre(genres)

return videogameSinGenreCreated;
}



    
module.exports = {createVideogame,VideogameById,searchByName,getAllVideogames}

