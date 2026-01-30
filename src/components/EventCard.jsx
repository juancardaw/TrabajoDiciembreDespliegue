// src/components/EventCard.jsx
import '../styles/EventCard.css';

// Funcion que hace las tarjetas de los elementos
function EventCard({ event, viewDetail }) {
  return (
    <div className="event-card">
      <h3>{event.titulo}</h3>
      <p>{event.categoria}</p>
      <p>{event.fecha}</p>
      <p>{event.lugar}</p>

{/* Creacion del boton para ver el detalle */}
      <button className="btn" onClick={() => viewDetail(event)}>
        Ver Detalle del Evento
      </button>
    </div>
  );
}

export default EventCard;
