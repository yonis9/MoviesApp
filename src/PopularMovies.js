import React from 'react';
import Cardlist from './Cardlist';
import Footer from './Footer';

const PopularMovies = ( { popularMovies }) => {
    return (
      <div>
        <h3 className='section-header'>Popular Movies</h3>
        <Cardlist  data={popularMovies} />
        <Footer />
      </div>
    )
}

export default PopularMovies;