import Card from "../Card/card"
import style from "./CardsContainer.module.css"

const CardsContainer = () =>{
    const videogames= [
        {
            "id": 12769,
            "name": "Roadclub: League Racing",
            "created": false,
            "rating": 0,
            "image": "https://media.rawg.io/media/screenshots/c10/c109a7b2b239ce7c5712345304348338.jpg",
            "releasedAt": "2017-01-08",
            "platforms": "PC",
            "genres": [
                {
                    "id": 1,
                    "name": "Racing"
                },
                {
                    "id": 4,
                    "name": "Action"
                },
                {
                    "id": 14,
                    "name": "Simulation"
                },
                {
                    "id": 15,
                    "name": "Sports"
                },
                {
                    "id": 51,
                    "name": "Indie"
                }
            ]
        },
        {
            "id": 736258,
            "name": "Mario Strikers: Battle League",
            "created": false,
            "rating": 3,
            "image": "https://media.rawg.io/media/games/7bc/7bc6f95486e6ec39b959dc37a9e8093b.jpg",
            "releasedAt": "2022-06-10",
            "platforms": "Nintendo Switch",
            "genres": [
                {
                    "id": 15,
                    "name": "Sports"
                }
            ]
        },
        {
            "id": 16928,
            "name": "FootLOL: Epic Fail League",
            "created": false,
            "rating": 2.63,
            "image": "https://media.rawg.io/media/screenshots/c84/c841102a515d24777f91b4861a84fb5b.jpg",
            "releasedAt": "2013-08-07",
            "platforms": "PC - macOS - Linux",
            "genres": [
                {
                    "id": 4,
                    "name": "Action"
                },
                {
                    "id": 5,
                    "name": "RPG"
                },
                {
                    "id": 40,
                    "name": "Casual"
                },
                {
                    "id": 11,
                    "name": "Arcade"
                },
                {
                    "id": 15,
                    "name": "Sports"
                },
                {
                    "id": 51,
                    "name": "Indie"
                }
            ]
        },
        {
            "id": 28984,
            "name": "Blitz: The League II",
            "created": false,
            "rating": 3.9,
            "image": "https://media.rawg.io/media/screenshots/6d7/6d7c018f17f68a9e963fa4360e17df48.jpg",
            "releasedAt": "2008-10-13",
            "platforms": "Xbox 360",
            "genres": [
                {
                    "id": 15,
                    "name": "Sports"
                }
            ]
        },
        {
            "id": 427932,
            "name": "Quantum League - Free Open Beta",
            "created": false,
            "rating": 1.71,
            "image": "https://media.rawg.io/media/screenshots/033/033de9b653c5f09a508e9bdf4c892f80.jpg",
            "releasedAt": "2020-02-21",
            "platforms": "PC",
            "genres": [
                {
                    "id": 10,
                    "name": "Strategy"
                },
                {
                    "id": 4,
                    "name": "Action"
                },
                {
                    "id": 15,
                    "name": "Sports"
                }
            ]
        },
        {
            "id": 492185,
            "name": "League of Angels-Heaven's Fury",
            "created": false,
            "rating": 0,
            "image": "https://media.rawg.io/media/screenshots/3df/3df8d950589302b99a0ba958b5407963.jpg",
            "releasedAt": "2020-09-03",
            "platforms": "PC",
            "genres": [
                {
                    "id": 59,
                    "name": "Massively Multiplayer"
                },
                {
                    "id": 4,
                    "name": "Action"
                },
                {
                    "id": 5,
                    "name": "RPG"
                }
            ]
        },
        {
            "id": 43861,
            "name": "The Drone Racing League: High Voltage",
            "created": false,
            "rating": 2.44,
            "image": "https://media.rawg.io/media/screenshots/841/841cbaae9ca3e4b99b4c5b1f700d7f30.jpg",
            "releasedAt": "2017-06-23",
            "platforms": "PC - macOS",
            "genres": [
                {
                    "id": 1,
                    "name": "Racing"
                },
                {
                    "id": 4,
                    "name": "Action"
                },
                {
                    "id": 14,
                    "name": "Simulation"
                },
                {
                    "id": 15,
                    "name": "Sports"
                }
            ]
        },
        {
            "id": 246464,
            "name": "Kunio-kun no Nekketsu Soccer League",
            "created": false,
            "rating": 4.41,
            "image": "https://media.rawg.io/media/games/876/8764efc52fba503a00af64a2cd51f66c.jpg",
            "releasedAt": "1993-04-23",
            "platforms": "NES - Atari 8-bit",
            "genres": [
                {
                    "id": 6,
                    "name": "Fighting"
                },
                {
                    "id": 15,
                    "name": "Sports"
                }
            ]
        },
        {
            "id": 17047,
            "name": "Supreme League of Patriots - Episode 2: Patriot Frames",
            "created": false,
            "rating": 0,
            "image": "https://media.rawg.io/media/screenshots/156/156cf75d7d518d6076aaadeb74827e98.jpg",
            "releasedAt": "2015-01-29",
            "platforms": "PC - macOS - Linux",
            "genres": [
                {
                    "id": 51,
                    "name": "Indie"
                },
                {
                    "id": 3,
                    "name": "Adventure"
                }
            ]
        },
        {
            "id": 692681,
            "name": "Hextech Mayhem: A League of Legends Story",
            "created": false,
            "rating": 3.67,
            "image": "https://media.rawg.io/media/games/b22/b225aa835ce31dcb1d012e8e93153d3c.jpg",
            "releasedAt": "2021-11-15",
            "platforms": "PC - Nintendo Switch - iOS - Android",
            "genres": [
                {
                    "id": 83,
                    "name": "Platformer"
                },
                {
                    "id": 51,
                    "name": "Indie"
                },
                {
                    "id": 4,
                    "name": "Action"
                }
            ]
        },
        {
            "id": 457728,
            "name": "Suicide Squad: Kill The Justice League",
            "created": false,
            "rating": 2.42,
            "image": "https://media.rawg.io/media/games/eac/eac17db790a988f47e5700d176497694.jpg",
            "releasedAt": "2023-05-26",
            "platforms": "PC - PlayStation 5 - Xbox Series S/X",
            "genres": [
                {
                    "id": 4,
                    "name": "Action"
                }
            ]
        },
        {
            "id": 398406,
            "name": "Ruined King: A League of Legends Story",
            "created": false,
            "rating": 3.88,
            "image": "https://media.rawg.io/media/games/ca9/ca914d13db738b6072d6eac2208c6470.jpg",
            "releasedAt": "2021-11-15",
            "platforms": "PC - Xbox One - PlayStation 4 - Nintendo Switch",
            "genres": [
                {
                    "id": 5,
                    "name": "RPG"
                }
            ]
        },
        {
            "id": 383516,
            "name": "League of Legends: Wild Rift",
            "created": false,
            "rating": 3.9,
            "image": "https://media.rawg.io/media/games/3c7/3c773379b9a4161528bf12a2c9346e93.jpg",
            "releasedAt": "2020-10-27",
            "platforms": "iOS - Android",
            "genres": [
                {
                    "id": 10,
                    "name": "Strategy"
                },
                {
                    "id": 4,
                    "name": "Action"
                }
            ]
        },
        {
            "id": 320394,
            "name": "Quantum League",
            "created": false,
            "rating": 2.92,
            "image": "https://media.rawg.io/media/screenshots/a81/a8169a30972a2377803f72354c0d7172.jpg",
            "releasedAt": null,
            "platforms": "PC - Nintendo Switch",
            "genres": [
                {
                    "id": 10,
                    "name": "Strategy"
                },
                {
                    "id": 4,
                    "name": "Action"
                },
                {
                    "id": 15,
                    "name": "Sports"
                }
            ]
        },
        {
            "id": 16948,
            "name": "Lethal League",
            "created": false,
            "rating": 3.62,
            "image": "https://media.rawg.io/media/screenshots/65b/65b9b6c96f093df897d14844e7b60819_bcrhbi4.jpg",
            "releasedAt": "2014-08-27",
            "platforms": "PC - Xbox One - PlayStation 4 - macOS - Linux",
            "genres": [
                {
                    "id": 51,
                    "name": "Indie"
                },
                {
                    "id": 4,
                    "name": "Action"
                },
                {
                    "id": 15,
                    "name": "Sports"
                }
            ]
        }
    ]
    return (
        <div className={style.Container}>
            {videogames.map(videogame => {
                return <Card
                    id={videogame.id}
                    name={videogame.name}
                    image={videogame.image}
                    platforms={videogame.platforms}
                    rating={videogame.rating}
                    releasedAt={videogame.releasedAt}
                />
            })}
        </div>
    )
    }
    export default CardsContainer;