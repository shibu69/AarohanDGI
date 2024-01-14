import './App.css';
import Navbar from './Components/Navbar';
import Index from './Components/Index';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './Components/About';
import Footer from './Components/Footer';
import Team from './Components/Team';
import Events from './Components/Events';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/events' element={<Events/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
