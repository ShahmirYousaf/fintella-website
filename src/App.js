import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Products from './Pages/Product/Product';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import FAQ from './Pages/FAQ/FAQ';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/products/:id" element={<ProductDetails/>} />
      </Routes>
      </Router>
  );
}

export default App;
