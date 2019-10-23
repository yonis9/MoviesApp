import React from 'react';
import Cardlist from './Cardlist';
import Footer from './Footer'

const UpcomingMovies = ({ upcomingMovies }) => {
    return (
     <div>
       <h3 className='section-header'>Upcoming Movies</h3>
       <Cardlist  data={upcomingMovies} />
       <Footer />
     </div>
    )
}

export default UpcomingMovies;