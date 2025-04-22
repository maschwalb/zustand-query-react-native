import { useQuery } from "@tanstack/react-query"
import {getPokemonsByGeneration, Pokemon} from "../api/pokemonService";
import {useSelectedGenerationStore} from "../store/selectedGenerationStore";

export const usePokemons = () => {

    const selectedGeneration = useSelectedGenerationStore(state => state.selectedGeneration);

    return useQuery({
        queryKey: ['pokemons', selectedGeneration],
        queryFn: () => getPokemonsByGeneration(selectedGeneration!),
        enabled: !!selectedGeneration,
        refetchInterval: 1000 * 30, // 30 seconds
    });
}