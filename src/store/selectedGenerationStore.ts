import {create} from "zustand/react";
import {Generation} from "../api/generationService";

type SelectedGenerationStore = {
    selectedGeneration?: Generation;
    setSelectedGeneration: (generation: Generation) => void;
};

export const useSelectedGenerationStore = create<SelectedGenerationStore>((set) => ({
    selectedGeneration: undefined,
    setSelectedGeneration: (generation) => set({selectedGeneration: generation}),
}));