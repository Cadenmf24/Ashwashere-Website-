
import './App.css';
import About from './sites/Aboutme';
import General from './sites/General';
import Home from './sites/Home'
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';



function App() {
  
  return (
    <>
    <Header />
    <div className = "container">
      <Routes>
        <Route path = "/home" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/general" element = {<General />} />
      </Routes>
      
    </div>
    <Footer />
    </>
  );
}

export default App;
