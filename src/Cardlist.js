import React from 'react';
import MovieCard from './MovieCard'
import './Cardlist.css';

const Cardlist = ({ data }) => {
    return (
        
        <div id='cardlist'>
{        data.map(movie => {
            return (<MovieCard key={movie.id}
                               name={movie.title} 
                               img={movie.backdrop_path}
                               poster={movie.poster_path}
                               overview={movie.overview}
                                rating={movie.vote_average}
                                voteCount={movie.vote_count}
                                date={movie.release_date}
                                id={movie.id}
                                />)
        })
        }
        </div>
    
    )
}

export default Cardlist;