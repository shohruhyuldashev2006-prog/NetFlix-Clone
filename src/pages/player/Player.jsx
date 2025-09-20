import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Player() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    type: '',
  });
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjUxZjY3M2EyMmI3NjM2MTEyNWI1OTQzYTk0NmQ4YiIsIm5iZiI6MTc1ODE4OTk3Ni40ODcsInN1YiI6IjY4Y2JkOTk4ODY3ZTFkMDQxMGJkMGJmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WF4opaOzx5KujsKjq6GmQCEeogO3nJ6ZZ6RwaSG2Ltg',
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  console.log(apiData.type, apiData.published_at, apiData.name);

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt=""
        onClick={() => {
          navigate(-2);
        }}
      />
      <iframe
        width={'90%'}
        height={'90%'}
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder={0}
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player;
