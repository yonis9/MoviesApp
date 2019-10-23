import React from 'react';
import './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
      <nav>
        <Link to='/'>
          <div id='upcoming'>
            <FontAwesomeIcon icon={faHome} size='lg'/>
          </div>
        </Link>
        <Link to='/popular'>
          <div id='popular' >
            <FontAwesomeIcon icon={faStar} size='lg'/>
          </div>
        </Link>
        <Link to='/search'>
          <div id='search'>
            <FontAwesomeIcon icon={faSearch} size='lg'/>
          </div>
        </Link>
      </nav>
    )
}

export default Navigation;