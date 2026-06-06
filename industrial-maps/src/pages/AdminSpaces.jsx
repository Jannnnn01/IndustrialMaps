import { useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { spacesMock } from "../data/spacesMock";
import { auth } from "../services/firebase";

function AdminSpaces() {
  const navigate = useNavigate();
  const [spaces, setSpaces] = useState(spacesMock);
  const [form, setForm] = useState({
    nombre: "",
    tipo: "",
    bloque: "",
    piso: "",
    responsable: "",
    descripcion: "",
    referencia: "",
  });

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/admin/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    const newSpace = {
      id: Date.now().toString(),
      ...form,
    };

    setSpaces([...spaces, newSpace]);
    setForm({
      nombre: "",
      tipo: "",
      bloque: "",
      piso: "",
      responsable: "",
      descripcion: "",
      referencia: "",
    });
  };

  const handleDelete = (id) => {
    const confirmDelete = confirm("¿Deseas eliminar este espacio?");

    if (confirmDelete) {
      setSpaces(spaces.filter((space) => space.id !== id));
    }
  };

  return (
    <section>
      <div className="admin-header">
        <div>
          <h1>Panel administrador</h1>
          <p className="page-description">
            Gestiona los espacios registrados en Industrial Maps.
          </p>
        </div>

        <button type="button" className="btn-secondary" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>

      <form className="admin-form" onSubmit={handleSave}>
        <input
          name="nombre"
          placeholder="Nombre del espacio"
          value={form.nombre}
          onChange={handleChange}
          required
        />

        <input
          name="tipo"
          placeholder="Tipo: Aula, Laboratorio..."
          value={form.tipo}
          onChange={handleChange}
          required
        />

        <input
          name="bloque"
          placeholder="Bloque: A, B, C..."
          value={form.bloque}
          onChange={handleChange}
          required
        />

        <input
          name="piso"
          placeholder="Piso"
          value={form.piso}
          onChange={handleChange}
          required
        />

        <input
          name="responsable"
          placeholder="Responsable"
          value={form.responsable}
          onChange={handleChange}
        />

        <textarea
          name="descripcion"
          placeholder="Descripción"
          value={form.descripcion}
          onChange={handleChange}
        />

        <textarea
          name="referencia"
          placeholder="Referencia para llegar"
          value={form.referencia}
          onChange={handleChange}
        />

        <button type="submit" className="btn-primary">
          Agregar espacio
        </button>
      </form>

      <div className="admin-list">
        {spaces.map((space) => (
          <div className="admin-item" key={space.id}>
            <div>
              <h3>{space.nombre}</h3>
              <p>
                {space.tipo} - Bloque {space.bloque} - {space.piso}
              </p>
            </div>

            <button
              type="button"
              className="btn-danger"
              onClick={() => handleDelete(space.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdminSpaces;
