import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom'
import '../style/Layout.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/produits">Produits</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/produits">Produits</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-social">
        <ul>
          <li>
            <a href="https://twitter.com">Twitter</a>
          </li>
          <li>
            <a href="https://facebook.com">Facebook</a>
          </li>
          <li>
            <a href="https://instagram.com">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default function Layout () {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  )
}

