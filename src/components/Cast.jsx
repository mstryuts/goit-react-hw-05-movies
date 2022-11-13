import { List, Img } from './Cast.styled';
import { getCastById } from 'api/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w300';
const NO_IMAGE =
  'https://t3.ftcdn.net/jpg/05/01/98/72/360_F_501987255_kb5LZcBmlcz00IejLlxpklpTbJ9ys5i8.jpg';

const Cast = () => {
  const [actors, setActors] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getData = async id => {
      try {
        const { cast } = await getCastById(id);
        setActors(cast);
      } catch (error) {
        console.log(error);
      }
    };
    getData(movieId);
  }, [movieId]);

  return (
    <>
      <h1>Cast</h1>
      <List>
        {actors.map(({ profile_path, name }) => (
          <li key={nanoid()}>
            {profile_path ? (
              <Img src={`${IMAGE_BASE_URL}${profile_path}`} alt={name} />
            ) : (
              <Img src={NO_IMAGE} alt={name} />
            )}
            <p>{name}</p>
          </li>
        ))}
      </List>
    </>
  );
};

export default Cast;
