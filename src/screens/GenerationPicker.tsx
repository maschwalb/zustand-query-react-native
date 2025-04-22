import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useGenerations } from '../hooks/useGenerations';
import {useSelectedGenerationStore} from "../store/selectedGenerationStore";

const GenerationPicker = () => {
    const setSelectedGeneration = useSelectedGenerationStore((state) => state.setSelectedGeneration);
    const selectedGeneration = useSelectedGenerationStore((state) => state.selectedGeneration);
    const { data: generations, isLoading } = useGenerations();

    useEffect(() => {
        console.log('selectedGeneration', selectedGeneration);
    }, [selectedGeneration]);

    if (isLoading) {
        return (
            <View style={styles.container}>
                <Text>Loading generations...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.grid}>
                {generations?.slice(0, 4).map((generation) => (
                    <TouchableOpacity
                        key={generation.name}
                        style={[
                            styles.generationBox,
                            selectedGeneration?.name === generation.name && styles.selectedBox
                        ]}
                        onPress={() => setSelectedGeneration(generation)}
                    >
                        <Text style={[
                            styles.generationText,
                            selectedGeneration?.name === generation.name && styles.selectedText
                        ]}>
                            {generation.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 8,
    },
    grid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 6,
    },
    generationBox: {
        width: '23%',
        aspectRatio: 1,
        backgroundColor: '#E3350D', // Pokémon Red
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        borderWidth: 2,
        borderColor: '#E3350D',
    },
    selectedBox: {
        backgroundColor: '#3C5AA6', // Pokémon Blue
        borderWidth: 2,
        borderColor: '#FFCB05', // Pokémon Yellow
    },
    generationText: {
        fontSize: 12,
        fontWeight: '600',
        textTransform: 'capitalize',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    selectedText: {
        color: '#FFFFFF',
    },
});

export default GenerationPicker;