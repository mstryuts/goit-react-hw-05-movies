import { useState, useEffect, useRef } from 'react';

import { Link, Outlet, useLocation } from 'react-router-dom';

import { MovieWrapper, MovieInfo, Li, Ul } from './MovieDetails.styled';

import { useParams } from 'react-router-dom';
import { getMovieById } from 'api/api';

import { ifSomeProblemAlert } from '../alerts';

const NO_IMAGE =
  'https://t3.ftcdn.net/jpg/05/01/98/72/360_F_501987255_kb5LZcBmlcz00IejLlxpklpTbJ9ys5i8.jpg';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w300';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);

  const { movieId } = useParams();
  const location = useLocation();
  const backRef = useRef(location?.state?.from);

  useEffect(() => {
    const getData = async id => {
      try {
        const data = await getMovieById(id);
        setMovie(data);
      } catch (error) {
        ifSomeProblemAlert(error);
      }
    };
    getData(movieId);
  }, [movieId]);

  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;

  if (movie.length === 0) return;

  const imgUrl = poster_path ? `${IMAGE_BASE_URL}/${poster_path}` : NO_IMAGE;

  return (
    <>
      <Link to={backRef.current ?? '/home'}>go back</Link>
      <MovieWrapper>
        {' '}
        <img src={imgUrl} alt={original_title}></img>
        <MovieInfo>
          {' '}
          <h1>
            {original_title} ({release_date.substr(0, 4)})
          </h1>
          <h2>Rating {vote_average}</h2>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <Ul>
            {genres.map(({ name }) => {
              return <Li key={name}>{name}</Li>;
            })}
          </Ul>
        </MovieInfo>
      </MovieWrapper>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
