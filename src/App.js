import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Homepage/Homepage';
import Login from './Login/Login';
import Register from './Register/Register';
import Welcome from './Welcome/Welcome';
import Nav from './Navbar/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/pre-home' element={<Welcome />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
