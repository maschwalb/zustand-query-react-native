import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Pokemon } from '../api/pokemonService';
import {usePokemons} from "../hooks/usePokemons";
import {useSelectedGenerationStore} from "../store/selectedGenerationStore";

const PokemonList = () => {
    const { data: pokemon, isLoading } = usePokemons();
    const selectedGeneration = useSelectedGenerationStore(state => state.selectedGeneration);

    if (!selectedGeneration) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Please select a generation to view Pokémon.</Text>
            </View>
        );
    }

    if (isLoading) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Loading Pokémon...</Text>
            </View>
        );
    }

    const renderItem = ({ item }: { item: Pokemon }) => (
        <View style={styles.pokemonItem}>
            <Text style={styles.pokemonName}>{item.name}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Pokémon from Generation {selectedGeneration?.id}
            </Text>
            <FlatList
                data={pokemon}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
                numColumns={2}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
    },
    list: {
        gap: 8,
    },
    pokemonItem: {
        flex: 1,
        backgroundColor: '#E3350D',
        padding: 12,
        borderRadius: 6,
        margin: 4,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#E3350D',
    },
    pokemonName: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
        textTransform: 'capitalize',
    },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 }
});

export default PokemonList;
