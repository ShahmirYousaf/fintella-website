import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Products from './Pages/Product/Product';

function App() {
  return (
    <Router>
      <Navbar/>
      <Products/>
      </Router>
  );
}

export default App;
