import './App.css';
import PhotoGallery from './components/PhotoGallery';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UserForm from './pages/User';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" exact element={<PhotoGallery/>} />
          <Route path="/user"  element={<UserForm/>} />
        </Routes>
  </Router>
  );
}

export default App;
