const getDataFromApi = () => {
  const url =
    'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json';
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //array de objetos con los datos originales:
      console.log(data.results);
      //le hacemos un map para quedarnos con los datos que nos interesan:
      const cleandData = data.results.map((charactersAPI) => {
        return {
          id: charactersAPI.id,
          image: charactersAPI.image,
          name: charactersAPI.name,
          specie: charactersAPI.species,
        };
      });
      //array DE OBJETOS que hemos creado con los datos que nos interesan:
      console.log(cleandData);
      return cleandData;
    });
};

export default getDataFromApi;
