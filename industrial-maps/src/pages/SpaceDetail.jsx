import { Link, useParams } from "react-router-dom";
import { spacesMock } from "../data/spacesMock";

function SpaceDetail() {
  const { id } = useParams();

  const space = spacesMock.find((item) => item.id === id);

  if (!space) {
    return (
      <section>
        <h1>Espacio no encontrado</h1>
        <Link to="/buscar" className="btn-primary">
          Volver a buscar
        </Link>
      </section>
    );
  }

  return (
    <section>
      <div className="detail-card">
        <span className="badge">{space.tipo}</span>

        <h1>{space.nombre}</h1>

        <p>
          <strong>Bloque:</strong> {space.bloque}
        </p>

        <p>
          <strong>Piso:</strong> {space.piso}
        </p>

        <p>
          <strong>Responsable:</strong> {space.responsable}
        </p>

        <p>
          <strong>Descripción:</strong> {space.descripcion}
        </p>

        <div className="route-box">
          <h3>Referencia para llegar</h3>
          <p>{space.referencia}</p>
        </div>

        <Link to="/mapa" className="btn-secondary">
          Ver mapa
        </Link>
      </div>
    </section>
  );
}

export default SpaceDetail;