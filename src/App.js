import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Contact from './pages/Contact';
import Login from './pages/Login';
import axios from 'axios';
import { useEffect } from 'react';
import api from './Api.js'

function App() {

  useEffect(() => {
    api.get('noticias').then(res => {
      console.log(res.data);
    })
  }, [])


  return (
    <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
