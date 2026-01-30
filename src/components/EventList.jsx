// src/components/EventList.jsx
import EventCard from './EventCard';

// Recibo la lista de eventos (events)
function EventList({ events, viewDetail }) {
  // Comprueblo en esta parte si la lista esta vacia. Si esta vacia muestro el mensaje
  if (!events || events.length === 0) return <p>No hay eventos disponibles para mostrar</p>;

  // Si hay eventos en la lista, recorro el array y muestro una tarjeta (eventCard) por cada evento
  return (
    <div className="event-list">
      {events.map((ev) => (
        <EventCard 
          key={ev.id} //Paso la clave unica
          event={ev}  //Pasamos los datos del evento
          viewDetail={viewDetail}  //Funcion para el boton del detalle
        />
      ))}
    </div>
  );
}

export default EventList;
