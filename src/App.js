import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
