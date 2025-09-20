import './TitleCard.css';
import { useState } from 'react';
// import cards_data from '../../assets/cards/Cards_data';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
function TitleCard({ title, category }) {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjUxZjY3M2EyMmI3NjM2MTEyNWI1OTQzYTk0NmQ4YiIsIm5iZiI6MTc1ODE4OTk3Ni40ODcsInN1YiI6IjY4Y2JkOTk4ODY3ZTFkMDQxMGJkMGJmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WF4opaOzx5KujsKjq6GmQCEeogO3nJ6ZZ6RwaSG2Ltg',
    },
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : 'now_playing'
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  }, []);
  return (
    <div className="titlecards">
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className="cards-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TitleCard;
