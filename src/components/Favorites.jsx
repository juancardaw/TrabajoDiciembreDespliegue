import '../styles/Favorites.css';

// Si en este caso no existe favoritos, me devuelve un nulo
function Favorites({ favorites, delFavorites }) {
  if (!favorites || favorites.length === 0) return null;

  // HTML de favoritos
  return (
    <div className="favorites">
      <h2>Favoritos</h2>
      <ul>
        {favorites.map((ev) => (
          <li key={ev.id}>
            {ev.titulo}
            <button className="btn delete-btn" onClick={() => delFavorites(ev.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
