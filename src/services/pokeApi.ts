export interface PokemonListItem {
  id: number;
  name: string;
  types: string[];
  image: string;
}

export async function fetchAllPokemon(): Promise<PokemonListItem[]> {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150'); // Limitando la cantidad de Pokémon a 150 para simplificar
    const data = await response.json();
    const pokemonList: PokemonListItem[] = await Promise.all(
      data.results.map(async (pokemon: any) => {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();
        const formattedPokemon: PokemonListItem = {
          id: pokemonData.id,
          name: pokemonData.name,
          types: pokemonData.types.map((type: any) => type.type.name),
          image: pokemonData.sprites.front_default
        };
        return formattedPokemon;
      })
    );
    return pokemonList;
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
    throw error;
  }
}