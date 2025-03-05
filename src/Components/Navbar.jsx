import { Link } from 'react-router-dom';
import "../Styles/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Fintella Technologies</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
