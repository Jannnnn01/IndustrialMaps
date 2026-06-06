import { useState } from "react";
import { spacesMock } from "../data/spacesMock";
import SpaceCard from "../components/SpaceCard";

function Search() {
  const [query, setQuery] = useState("");

  const filteredSpaces = spacesMock.filter((space) => {
    const text = `${space.nombre} ${space.tipo} ${space.bloque} ${space.piso}`;
    return text.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <section>
      <h1>Buscar espacio</h1>

      <p className="page-description">
        Escribe el nombre, tipo, bloque o piso del espacio que necesitas ubicar.
      </p>

      <input
        type="text"
        className="search-input"
        placeholder="Ej: Aula A101, laboratorio, Bloque B..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="cards-grid">
        {filteredSpaces.length > 0 ? (
          filteredSpaces.map((space) => (
            <SpaceCard key={space.id} space={space} />
          ))
        ) : (
          <p>No se encontraron espacios.</p>
        )}
      </div>
    </section>
  );
}

export default Search;