import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Homepage/Homepage';
import Products from './ProductsPage/Products';
import Login from './Login/Login';
import Register from './Register/Register';
import Welcome from './Welcome/Welcome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Homepage />} />
        <Route path='/buy' element={<Products />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Welcome />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
