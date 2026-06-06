import { Link } from "react-router-dom";

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <Link to="/">Inicio</Link>
      <Link to="/buscar">Buscar</Link>
      <Link to="/mapa">Mapa</Link>
      <Link to="/admin/login">Admin</Link>
    </nav>
  );
}

export default BottomNav;