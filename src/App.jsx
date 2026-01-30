import { useEffect, useState } from "react";
import "./styles/main.css"; // Estilos globales

// Importacion del archivo JSON
import datosEventos from "./data/eventos.json";

// Importacion de los componentes
import EventList from "./components/EventList";
import EventDetail from "./components/EventDetail";
import Favorites from "./components/Favorites";
import Filters from "./components/Filters";

// Importacion de  CSS de cada componente
import "./styles/EventCard.css";
import "./styles/EventDetail.css";
import "./styles/Favorites.css";
import "./styles/Filters.css";

function App() {
  // Estados principales de app

//   Lista de todos los eventos cargados desde el archivo JSON. Inicialment esta vacio, pero se llena cuando se simule la carga de datos
  const [events, setEvents] = useState([]);
//   Estado de carga de datos. Si es "true" se cargan los datos, si es "false" ya estan cargados
  const [cargando, setCargando] = useState(true);
//   Estado para el manejor de errores al cargar los datos
  const [error, setError] = useState(null);
//     Texto que el usuario escribe cuando buscamos en el buscador
  const [search, setSearch] = useState("");
//   Categoria seleccionada para filtros con los valores posibles del filtro
  const [category, setCategory] = useState("Todas");
//      Evento seleccinado por defecto para mostrar detalle
  const [selectedEvent, setSelectedEvent] = useState(null);
//      Lista de eventos marcados como favoritos por el usuario en este caso. Se añaden mas cuando el usuario selecciona sus favoritos
  const [favorites, setFavorites] = useState([]);


  // Simula carga de eventos desde el archivo JSON
  useEffect(() => {
    setTimeout(() => {
      try {
        // añadimos la carga de datos
        setEvents(datosEventos);
        // Eventos cargados con "false"
        setCargando(false);
      } catch {
        setError("No se pudieron cargar los eventos. Intentalo de nuevo mas tarde");
        setCargando(false);
      }
    }, 1000); //Meto un segundo de espera simulando la carga
    // El array vacío [] indica que este useEffect
// solo se ejecuta una vez al iniciar la aplicación
  }, []);



  // Añadir a favoritos (sin duplicados)
  function addFavorite(event) {
    // Si el elemento no lo tengo en la lista de favoritos, lo añado
    if (!favorites.some((e) => e.id === event.id)) {
      setFavorites([...favorites, event]);
    }
  }



  // Quitar de favoritos
  function delFavorite(id) {
    setFavorites(favorites.filter((e) => e.id !== id));
  }



  // Filtrado de eventos por búsqueda y categoría
  const filteredEvents = events.filter((event) => {
    // Compruebo si el texto de busqueda coincide con el titulo o el lugar del evento (sin distinguir mayusculas)
    const textOk =
      event.titulo.toLowerCase().includes(search.toLowerCase()) ||
      event.lugar.toLowerCase().includes(search.toLowerCase());

    // Compueblo si la categoria es valida. Si esta seleccionada en "Todas", se aceptan todas. Si no, la categoria del evento debe coincidir
    const categoryOk = category === "Todas" || event.categoria === category;

    // Mostramos el evento si solo cumple las dos condiciones
    return textOk && categoryOk;
  });



  // Estados de carga o error
  if (cargando) return <p>Cargando eventos...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

//   Redenrizado del HTML pagina principal
  return (
    <div>
      <h1>Agenda de eventos</h1>

      {/* Filtros */}
      <Filters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      {/* Contador */}
      <p>
        Mostrando {filteredEvents.length} de {events.length} eventos
      </p>

      {/* Favoritos */}
      <Favorites favorites={favorites} delFavorites={delFavorite} />

      {/* Vista de detalle o lista */}
      {/* Si tengo un evento seleccionado -> Se muestra el detalle del evento */}
      {/* Si NO hay un evento seleccionado -> se muestra la lista de eventos */}
      {selectedEvent ? (

        // Muestro el detalle del evento seleccionado
        <EventDetail
          event={selectedEvent}
          back={() => setSelectedEvent(null)}
          favorite={favorites}
          addFavorite={addFavorite}
        />
      ) : (

        // Si no hay un evento seleccionado (Seleted === Null), se muestra la lista de eventos con el boton de "Ver Detalle del Evento"
        <EventList events={filteredEvents} viewDetail={setSelectedEvent} />
      )}
    </div>
  );
}

export default App;
