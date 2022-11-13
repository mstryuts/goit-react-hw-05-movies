import { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import { getTrending } from 'api/api';

export const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { results } = await getTrending();

      setTrending(results);
    };
    getData();
  }, []);

  return <MovieList movies={trending} />;
};
