import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        Industrial Maps
      </Link>

      <nav className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/buscar">Buscar</Link>
        <Link to="/mapa">Mapa</Link>
        <Link to="/admin/login">Admin</Link>
      </nav>
    </header>
  );
}

export default Navbar;