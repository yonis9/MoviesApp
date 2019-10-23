import React from 'react';
import SearchField from './SearchField';
import Cardlist from './Cardlist';
import Footer from './Footer';

const SearchPage = ( { onInputChange, handleVote, data}) => {
    return (
        <div>
        <SearchField onInputChange={onInputChange}/>
        <Cardlist  data={data} handleVote={handleVote}/>
        <Footer />
      </div>
    )
}

export default SearchPage