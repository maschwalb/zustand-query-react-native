import {Button, Text, View} from "react-native";
import {useQuery} from "@tanstack/react-query";
import {getUsers} from "./api/user";
import {useUserStore} from "./store/userStore";
import {useEffect} from "react";
import {getGenerations} from "./api/generationService";

const Entry = () => {

    useEffect(() => {
        getGenerations();
    }, []);

    const { filters } = useUserStore();

    const { data } = useQuery({
        queryKey: ['generations', filters],
        queryFn: () => getGenerations(),
    });

    return (<View>
            <FiltersComponent/>
            {data?.map((generation, index) => (
                <Text key={index}>
                    {`${generation.name}: ${generation.url}`}
                </Text>))}
        </View>
    )
}

const FiltersComponent = () => {
    const { setFilters, filters } = useUserStore();

    return (
        <View>
            <Button title={'Set Filters'} onPress={() => {
                setFilters({
                    page: (filters?.page ?? 0) + 1,
                    limit: 10,
                });
            }}/>
        </View>
    )
}

export default Entry;