import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./components/layout/Navbar";

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;
