// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { URL_IMG, IMG_SIZE_LARGE } from '../../../utils/constants';

type Props = {
  movies: Array<Object>
}

const MovieList = ({ movies }: Props) => {
  const moviesList = movies.filter(movie => movie.poster_path !== null)
    .map(movie => (
      <Col xs={6} sm={4} md={3} key={movie.id} >
        <Link to={`/movie/${movie.id}`} >
          <Image src={URL_IMG + IMG_SIZE_LARGE + movie.poster_path} responsive />
        </Link>
      </Col>));

  return (
    <Grid fluid={false}>
      <Row>
        {moviesList}
      </Row>
    </Grid>
  );
}

export default MovieList
