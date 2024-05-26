
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutme from './sites/Aboutme';
import General from './sites/General';
import Home from './sites/Home'
import Header from './components/Header';



function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact path = "/" component = {Home} />
      <Route exact path = "/about" component = {Aboutme} />
      <Route exact path = "/general" component = {General} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
