import React, { Component } from 'react';
import './Movie.css';
import Footer from './Footer';

class Movie extends Component  {
    constructor() {
        super()
        this.state = {
            yourRating:0,
            resMessage: '',
            message: false 
                
            
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.message){
            window.setTimeout(() => {
               this.setState({message: false ,resMessage: ''})
                    
            } ,2500)
    
        }
    }
    
    updateRating = (e) => {
        this.setState({yourRating: e.target.value})
    }

    handleVote = (id, rating) => {
        console.log(id, rating)
        if (!window.localStorage.session_id) {
        
        fetch(`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${process.env.REACT_APP_API_KEY}
        `)
        .then(response => response.json())
        .then(data => {
          window.localStorage.setItem('session_id', data.guest_session_id)
        })
    }
    
        const { session_id } = window.localStorage;
        fetch(`https://api.themoviedb.org/3/movie/${id}/rating?api_key=${process.env.REACT_APP_API_KEY}&guest_session_id=${session_id}`,
        {method: 'post',
        headers:{"Content-Type": 'application/json'},
        body: JSON.stringify({value: rating})
        })
        .then(response => response.json())
        .then(data => {
            if (data.status_code === 1) {
                this.setState({message: true, resMessage: 'Successful vote' })
            } else if (data.status_code === 12) {
                this.setState({message: true, resMessage: 'Successful updated vote' })
            } else if (data.status_code === 12) {
                this.setState({message: true, resMessage: 'Please insert vote rating between 0.0 - 10.0' })
            }
        })
    
      }

    render() {
        const { name, img, overview, rating, voteCount, date, id, poster } = this.props.location.state;
        const { yourRating, resMessage } = this.state;
    return (
        <div>
        <div className='movie'>
                        <div className='description'>
                        <h3> {name}</h3>
                <p>{overview}</p>
                <h5>Realese Date: {date}</h5>
                <div className='name-rating'>
                <input type="number" name="quantity" min="0" max="10" onChange={this.updateRating}/>
                <button onClick={()=>this.handleVote(id, yourRating)}>Rate</button>
                <h5>{resMessage}</h5>
            <h4>{rating} ({voteCount})</h4>
            </div>
            </div>
            <img src={`https://image.tmdb.org/t/p/w300/${poster}`} />
        </div>
        <Footer />
        </div>
    )
    }
}

export default Movie;