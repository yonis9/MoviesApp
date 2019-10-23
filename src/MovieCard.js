import React from 'react';
import './MovieCard.css'
import { Link } from 'react-router-dom'

const MovieCard = ({name, img, overview, rating, voteCount, date, handleVote, id, poster }) => {
    return (
        <Link to={{pathname: `/movie/${id}`, state:{name, img, overview, rating, voteCount, date, id, poster } }}>
        <div className='card'>
            <img src={`https://image.tmdb.org/t/p/w200/${img}`} />
            <div className='name'>
                 <h3>{name}</h3>
             </div>
        </div>
        </Link>
    )
}

export default MovieCard;