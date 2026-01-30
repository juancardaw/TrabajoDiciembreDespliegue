import '../styles/Filters.css';

// Funcion de los filtros
function Filters({ search, setSearch, category, setCategory }) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Busca por título o lugar de evento"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />

      <select
        value={category}
        onChange={(ev) => setCategory(ev.target.value)}
      >
        <option value="Todas">Todas</option>
        <option value="Charla">Charla</option>
        <option value="Taller">Taller</option>
        <option value="Torneo">Torneo</option>
        <option value="Excursion">Excursion</option>
      </select>
    </div>
  );
}

export default Filters;


// onChange es un evento de React que se ejecuta cada vez que el usuario cambia el valor de un input, select o textarea.