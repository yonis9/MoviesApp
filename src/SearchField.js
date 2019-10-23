import React from 'react';
import './SearchField.css'

const SearchField = ({ onInputChange }) => {
    return (
        <div>
            <input id= 'searchinput' type='text' placeholder='Search movie' onChange={onInputChange}></input>
        </div>
    )
}

export default SearchField;