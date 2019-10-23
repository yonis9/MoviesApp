import React from 'react';
import Cardlist from './Cardlist';
import Footer from './Footer';

const PopularMovies = ( { popularMovies }) => {
    return (
      <div>
        <h3 className='section-header'>Popular Movies</h3>
        {!popularMovies.length ?
       <div className='lds-con'>
       <div className="lds-css ng-scope" style={{width: '200px', height: '200px'}}>
      <div className="lds-spinner" style={{width:'100%',height:'100%'}}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div></div>
       :
        <Cardlist  data={popularMovies} />
        }
        <Footer />
      </div>
    )
}

export default PopularMovies;