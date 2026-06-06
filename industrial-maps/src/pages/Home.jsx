import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="hero">
        <h1>Industrial Maps</h1>

        <p>
          Ubica de manera rápida aulas, laboratorios, oficinas, biblioteca y
          áreas comunes de la Facultad de Ingeniería Industrial.
        </p>

        <div className="hero-actions">
          <Link to="/buscar" className="btn-primary">
            Buscar espacio
          </Link>

          <Link to="/mapa" className="btn-secondary">
            Ver mapa
          </Link>
        </div>
      </div>

      <div className="info-grid">
        <div>
          <h3>Búsqueda rápida</h3>
          <p>Encuentra espacios por nombre, tipo, bloque o piso.</p>
        </div>

        <div>
          <h3>Mapa por bloques</h3>
          <p>Explora la facultad mediante una vista sencilla e interactiva.</p>
        </div>

        <div>
          <h3>Información clara</h3>
          <p>Consulta ubicación, responsable, descripción y referencia.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;