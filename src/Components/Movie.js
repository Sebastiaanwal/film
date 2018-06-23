
import React from 'react';
import axios from 'axios';

export default class Movie extends React.Component {
  state = {
    movieName: {},
  };

  componentDidMount() {
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=722bb648').then(res => {
      console.log(res)
      this.setState({ movieName: res.data })
    })
  }

  render() {
    return <ul> {this.state.movieName.Title}

      
        </ul>
    
  }

}
