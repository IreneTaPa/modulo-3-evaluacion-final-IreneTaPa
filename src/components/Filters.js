import '../styles/layout/Filters.scss';

const Filters = ({
  searchByName,
  searchBySpecie,
  setSearchByName,
  setSearchBySpecie,
}) => {
  const handleSearchByName = (ev) => {
    setSearchByName(ev.target.value);
  };

  const handleSearchBySpecie = (ev) => {
    setSearchBySpecie(ev.target.value);
  };

  return (
    <form className="form">
      <label className="label__text" htmlFor="">
        Personaje por nombre
      </label>
      <input
        type="text"
        className="input"
        value={searchByName}
        onInput={handleSearchByName}
      />
      <label className="label__text" htmlFor="">
        Personaje por especie
      </label>
      <input
        type="text"
        className="input"
        value={searchBySpecie}
        onInput={handleSearchBySpecie}
      />
    </form>
  );
};

export default Filters;
