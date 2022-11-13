import { SearchForm, SearchButton, SearchInput } from './Movies.styled';
import { getMovie } from 'api/api';
import { useState, useEffect } from 'react';
import MovieList from 'components/MovieList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movie, setMovie] = useState([]);
  const [searchRequest, setSearchRequest] = useState('');

  useEffect(() => {
    const search = searchParams.get('search');
    if (!search) return;
    const loadingContent = async search => {
      const { results } = await getMovie(search);
      setMovie(results);
    };
    loadingContent(search);
  }, [searchParams]);

  useEffect(() => {
    if (!searchRequest) {
      return;
    }
    const getData = async () => {
      const { results } = await getMovie(searchRequest);

      setMovie(results);
    };
    getData();
  }, [searchRequest]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchQuery = form.elements.input.value;
    if (searchQuery.trim() === '') {
      alert('empty');
      return;
    }
    setSearchParams({ search: searchQuery });
    setSearchRequest(searchQuery);
    form.reset();
  };

  return (
    <>
      {' '}
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput name="input" type="text" />
        <SearchButton>🎦</SearchButton>
      </SearchForm>
      <MovieList movies={movie} />
    </>
  );
};

export default Movies;
