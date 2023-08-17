import './App.css';
import PhotoGallery from './components/PhotoGallery';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import User from './pages/User';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" exact element={<PhotoGallery/>} />
          <Route path="/user"  element={<User/>} />
        </Routes>
  </Router>
  );
}

export default App;
