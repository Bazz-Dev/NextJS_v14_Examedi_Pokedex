import React, { useEffect, useState } from 'react';
import { fetchPokemonDetails } from '../services/pokeApi';
import type { PokemonDetails } from '../services/pokeApi';
import 'tailwindcss/tailwind.css';

import Link from 'next/link';



interface Props {
    pokemonId: number;
}

const PokemonDetails: React.FC<Props> = ({ pokemonId }) => {
    const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const details = await fetchPokemonDetails(pokemonId);
                setPokemonDetails(details);
                console.log(details)

            } catch (error) {
                console.error('Error fetching Pokemon details:', error);
            }
        };

        fetchData();
    }, [pokemonId]);

    if (!pokemonDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4">
          <div className="flex justify-between items-center">
          <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              volver
            </Link>
            <h2 className="text-2xl font-bold">{pokemonDetails.name}</h2>
        <p className="text-gray-600">ID: {pokemonDetails.id}</p>
      </div>
      <img src={pokemonDetails.image} alt={pokemonDetails.name} className="w-32 h-auto object-cover rounded-lg mx-auto mb-4" />
      <div className="flex flex-wrap gap-2 justify-center">
        {pokemonDetails.types.map((type, index) => (
          <span
            key={index}
            className={`px-2 py-1 rounded-full text-white text-xs font-medium bg-${type}`}
          >
            {type}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-2 lex justify-between items-center">
        <p className="text-gray-600 font-bold">Habilidades:</p>
        <ul className="list-disc pl-4">
          {pokemonDetails.abilities.map((ability, index) => (
            <li key={index} className="text-gray-700">
              {ability}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <p className="text-gray-600 font-bold">Estadísticas:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p className="text-gray-700">Altura: {pokemonDetails.height}m</p>
          <p className="text-gray-700">Peso: {pokemonDetails.weight}kg</p>
          <p className="text-gray-700">Categoría: {pokemonDetails.category}</p>
          {pokemonDetails.weaknesses.length > 0 && (
            <p className="text-gray-700">Debilidades: {pokemonDetails.weaknesses.join(', ')}</p>
          )}
          {pokemonDetails.evolutions.length > 0 && (
            <p className="text-gray-700">Evoluciones: {pokemonDetails.evolutions.join(', ')}</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default PokemonDetails;
