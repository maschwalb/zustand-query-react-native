import { useQuery } from '@tanstack/react-query';
import { getGenerations } from '../api/generationService';

export const useGenerations = () => {
    return useQuery({
        queryKey: ['generations'],
        queryFn: () => getGenerations(),
        staleTime: 1000 * 60, // 1 minute
    });
}; 