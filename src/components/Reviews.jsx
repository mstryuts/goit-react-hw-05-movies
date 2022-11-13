import { getReviewsById } from 'api/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getData = async id => {
      try {
        const { results } = await getReviewsById(id);

        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    };

    getData(movieId);
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(res => (
            <li key={nanoid()}>
              <b>{res.author}</b>
              <p>{res.content}</p>
            </li>
          ))
        ) : (
          <p>No reviews.</p>
        )}
      </ul>
    </>
  );
};

export default Reviews;
