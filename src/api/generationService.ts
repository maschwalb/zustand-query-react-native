import HTTPService from "./HTTPService";

type GenerationResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: GenerationDTO[];
}

type GenerationDTO = {
    name: string;
}

export type Generation = {
    id: number;
    name: string;
}

export const getGenerations = async (): Promise<Generation[]> => {

    function mapGeneration(generation: GenerationDTO): Generation {
        let id;
        switch (generation.name) {
            case 'generation-i':
                id = 1;
                break;
            case 'generation-ii':
                id = 2;
                break;
            case 'generation-iii':
                id = 3;
                break;
            case 'generation-iv':
                id = 4;
                break;
            default:
                id = 0;
                break;
        }
        return {
            id,
            name: generation.name,
        };
    }

    const response = await HTTPService.get<GenerationResponse>('generation');

    return response.results.map(g => mapGeneration(g));
}