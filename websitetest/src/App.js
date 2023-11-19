
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutme from './sites/Aboutme';
import General from './sites/General';
import Home from './sites/Home'
import Layout from './components/Layout';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Layout/>}>
        <Route index element = {<Home />} />
        <Route path = "Aboutme" element = {<Aboutme />} />
        <Route path = "General" element = {<General />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
