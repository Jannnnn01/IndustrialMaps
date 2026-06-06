import { Link } from "react-router-dom";

function SpaceCard({ space }) {
  return (
    <article className="space-card">
      <span className="badge">{space.tipo}</span>

      <h3>{space.nombre}</h3>

      <p>
        <strong>Bloque:</strong> {space.bloque}
      </p>

      <p>
        <strong>Piso:</strong> {space.piso}
      </p>

      <Link to={`/espacio/${space.id}`} className="btn-card">
        Ver ubicación
      </Link>
    </article>
  );
}

export default SpaceCard;