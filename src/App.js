import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import NavBar from './components/NavBar';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import InfoPage from './pages/InfoPage';
import LoginPage from "./pages/LoginPage";
import './App.css';

const App = () => {

  const [isAdmin, setIsAdmin] = useState(JSON.parse(localStorage.getItem('isAuthAdmin')));

  return (
    <>
      <NavBar isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
      <div className="App">
        <div className='container'>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/profile" element={<ProfilePage isAdmin={isAdmin} />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/login" element={<LoginPage setIsAdmin={setIsAdmin} />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
