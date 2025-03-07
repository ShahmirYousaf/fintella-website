import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Products from './Pages/Product/Product';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Merchant from './Pages/Merchant/Merchant';
import Home from './Pages/Home/Home';
import FAQ from './Pages/FAQ/FAQ';
import ContactPage from './Pages/Contact/Contact';
import PrivacyPolicy from './Pages/PrivacyPolicy/Privacy-policy';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/merchant" element={<Merchant />} />

        <Route path="/products/:id" element={<ProductDetails/>} />
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/privacy' element={<PrivacyPolicy/>}/>

      </Routes>
    </Router>
  );
}

export default App;