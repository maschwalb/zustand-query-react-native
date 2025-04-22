import { Generation } from "./generationService";
import HTTPService from "./HTTPService";

export type Pokemon = {
    name: string;
    url: string;
}

type PokemonsResponseByGeneration = {
    pokemon_species: Pokemon[];
}

export const getPokemonsByGeneration = async (generation: Generation): Promise<Pokemon[]> => {
    const response = await HTTPService.get<PokemonsResponseByGeneration>(`generation/${generation.id}`);
    
    return response.pokemon_species;
}

