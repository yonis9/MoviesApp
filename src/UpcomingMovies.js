import React from 'react';
import Cardlist from './Cardlist';
import Footer from './Footer';


const UpcomingMovies = ({ upcomingMovies }) => {
    return (
      
     <div>
       <h3 className='section-header'>Upcoming Movies</h3>
       {!upcomingMovies.length ?
       <div className='lds-con'>
       <div className="lds-css ng-scope" style={{width: '200px', height: '200px'}}>
      <div className="lds-spinner" style={{width:'100%',height:'100%'}}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div></div>
       :
       <Cardlist  data={upcomingMovies} />
       }
       <Footer />
     </div>
    )
}

export default UpcomingMovies;