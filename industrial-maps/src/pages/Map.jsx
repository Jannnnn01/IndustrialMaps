import { useState } from "react";
import { spacesMock } from "../data/spacesMock";
import SpaceCard from "../components/SpaceCard";

function Map() {
  const [selectedBlock, setSelectedBlock] = useState("A");

  const blocks = ["A", "B", "C", "D", "E", "F"];

  const spacesByBlock = spacesMock.filter(
    (space) => space.bloque === selectedBlock
  );

  return (
    <section>
      <h1>Mapa interactivo</h1>

      <p className="page-description">
        Selecciona un bloque para visualizar los espacios disponibles.
      </p>

      <div className="map-image-box">
        <img src="/plano-facultad.png" alt="Plano de la facultad" />
      </div>

      <div className="blocks-grid">
        {blocks.map((block) => (
          <button
            key={block}
            className={selectedBlock === block ? "block active" : "block"}
            onClick={() => setSelectedBlock(block)}
          >
            Bloque {block}
          </button>
        ))}
      </div>

      <h2>Espacios del Bloque {selectedBlock}</h2>

      <div className="cards-grid">
        {spacesByBlock.length > 0 ? (
          spacesByBlock.map((space) => (
            <SpaceCard key={space.id} space={space} />
          ))
        ) : (
          <p>No hay espacios registrados en este bloque.</p>
        )}
      </div>
    </section>
  );
}

export default Map;