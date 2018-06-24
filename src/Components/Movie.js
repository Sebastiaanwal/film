import React, { PropTypes } from 'react';

const Movie = (props) => {

  return (
    <div className="col-xs-4">
    <img src={props.movie.image}  />
    <h1>{props.movie.title} </h1>
    <p>{props.movie.director}</p>
    <p>{props.movie.country}</p>

    </div>
  );
};


export default Movie;