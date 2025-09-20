import Login from './pages/login/Login';
import Home from './pages/home/Home';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Player from './pages/player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('logged In');
        navigate('/');
      } else {
        console.log('logged Out');
        navigate('/login');
      }
    });
  }, []);
  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="player/:id" element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;
