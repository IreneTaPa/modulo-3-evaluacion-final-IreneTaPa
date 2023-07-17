const getDataFromApi = () => {
  const url = 'https://rickandmortyapi.com/api/character';
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const cleandData = data.results.map((charactersAPI) => {
        return {
          id: charactersAPI.id,
          image: charactersAPI.image,
          name: charactersAPI.name,
          specie: charactersAPI.species,
          status: charactersAPI.status,
          origin: charactersAPI.origin.name,
          episodes: charactersAPI.episode,
        };
      });

      return cleandData;
    });
};

export default getDataFromApi;
