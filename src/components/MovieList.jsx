import { List, ListItem, ListName } from './MovieList.styled';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, name, title }) => (
        <ListItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <ListName>{title || name}</ListName>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default MovieList;

MovieList.propTypes = {
  trending: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
