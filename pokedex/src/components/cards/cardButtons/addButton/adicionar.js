






const adicionarPokemon = (id) => {
    const index = pokemons.findIndex((pokemon) => {
      return pokemons.id === id;
    });

    if (index === -1) {
      listPokedex.push({ ...pokemons });
    }
    setPokemons(listPokedex);
  };