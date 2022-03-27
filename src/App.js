import { Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import InfoPage from './pages/InfoPage';
import './App.css';

const App = () => {

  return (
    <>
      <NavBar />
      <div className="App">
        <div className='container'>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/info" element={<InfoPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
