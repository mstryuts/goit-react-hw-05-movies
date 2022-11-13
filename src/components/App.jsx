import { Route, Routes } from 'react-router-dom';
import { Movies } from '../pages/Movies';
import { Home } from '../pages/Home';
import Reviews from './Reviews';
import Cast from './Cast';
import MovieDetails from './MovieDetails';
import { SharedLayout } from './SharedLayout';
// import { lazy } from 'react';

// const Movies = lazy(() => import('../pages/Movies'));
// const MovieDetails = lazy(() => import('./MovieDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
