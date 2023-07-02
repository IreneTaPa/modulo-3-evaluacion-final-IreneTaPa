const Filters = ({
  searchByName,
  searchBySpecie,
  setSearchByName,
  setSearchBySpecie,
}) => {
  //controlamos el input del nombre
  const handleSearchByName = (ev) => {
    setSearchByName(ev.target.value);
  };
  //controlamos input de la especie
  const handleSearchBySpecie = (ev) => {
    setSearchBySpecie(ev.target.value);
  };

  return (
    <form>
      <label className="label__text" htmlFor="">
        Personaje por nombre
      </label>
      <input type="text" value={searchByName} onInput={handleSearchByName} />
      <label className="label__text" htmlFor="">
        Personaje por especie
      </label>
      <input
        type="text"
        value={searchBySpecie}
        onInput={handleSearchBySpecie}
      />
    </form>
  );
};

export default Filters;
