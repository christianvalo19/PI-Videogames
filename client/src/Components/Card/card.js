import style from "./card.module.css"

const Card = (props) =>{
    return (
        <div className={style.Card}>
            <p>{props.name} </p>
            <p><img src={props.image} alt="Imagen del videojuego" className={style.image}/> </p>
            <p>Plataformas: {props.platforms} </p>
            <p>Rating: {props.rating} </p>
            <p>Fecha de lanzamiento: {props.releasedAt} </p>
            <p>Id: {props.id} </p>
        </div>
    )
    }
    export default Card;