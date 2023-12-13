import './App.css';
import Header from "./components/Header"
import Nav from "./components/Nav"
import Main from "./components/Main"
import About from './components/About';
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <div className='header-wrapper'>
        <Header />
        <Nav />
      </div>
      <div className='main-wrapper'>
        <Main />
      </div>
      <div className='about-wrapper'>
        <About />
      </div>
    </>
  );
}

export default App;
