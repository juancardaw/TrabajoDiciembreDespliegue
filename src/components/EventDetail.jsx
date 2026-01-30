// src/components/EventDetail.jsx
import '../styles/EventDetail.css';


// Funcion que nos muestra el detalle del elemento
function EventDetail({ event, back, favorite, addFavorite }) {

// 1️⃣ favorite
// Es la lista de favoritos que llega como prop desde App.jsx
// Es un array de objetos (cada objeto es un evento)

// 2️⃣ .some(...)
// Es un método de JavaScript para arrays
// Devuelve true si algún elemento cumple la condición
// Devuelve false si ninguno la cumple

// 3️⃣ (e) => e.id === event.id
// Función que se ejecuta por cada elemento e del array
// Compara el id del evento de la lista con el id del evento actual
// Si encuentra coincidencia → some() devuelve true → el evento ya es favorito

  const isFavorite = favorite.some((e) => e.id === event.id);

  return (
    <div className="event-detail">
      <h2>{event.titulo}</h2>
      <p><strong>Categoria:</strong> {event.categoria}</p>
      <p><strong>Fecha:</strong> {event.fecha}</p>
      <p><strong>Lugar:</strong> {event.lugar}</p>
      <p>{event.descripcion}</p>

      {/* Al hacer click, ejecutamos la funcion addFavorite pasando este evento */}
      {/* Si isFavorite es true, el boton se desactiva */}
      <button className="btn" onClick={() => addFavorite(event)} disabled={isFavorite}>
        {/* Si esta en favoritos el evento, aparece el boton indicando que ya esta en la lista de favoritos. Si no, aparece "añadir favoritos" */}
        {isFavorite ? "En Favoritos" : "Añadir a Favoritos"}
      </button>

      <br />

      <button className="btn back-btn" onClick={back}>
        Volver Página Anterior
      </button>
    </div>
  );
}

export default EventDetail;
