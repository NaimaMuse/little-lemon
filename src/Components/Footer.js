import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <h2>Little Lemon</h2>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/menu">Menu</Link>
          </li>

          <li>
            <Link to="/reservations">
              Reservations
            </Link>
          </li>
        </ul>
      </nav>

      <p>Chicago, Illinois</p>

      <p>© 2026 Little Lemon</p>
    </footer>
  );
}

export default Footer;