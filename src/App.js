import {
  Route,
  Routes
} from 'react-router-dom';
import MainApp from './MainApp';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import './App.css';
import BookingPages from './pages/BookingPages';


function App() {
  return (
    <MainApp>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/menu' />
        <Route path='/reservations' element={<BookingPages />} />
        <Route path='/order' />
        <Route path='/login' />
      </Routes>
    </MainApp>
  );
}

export default App;
