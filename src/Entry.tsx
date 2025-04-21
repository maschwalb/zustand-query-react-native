import {Text, View} from "react-native";
import {useQuery} from "@tanstack/react-query";
import {getUsers} from "./api/user";

const Entry = () => {

    const { data } = useQuery({
        queryKey: ['users'],
        queryFn: () => getUsers(),
    });

        return (data?.map((user) => (
            <Text key={user.id}>
                {`${user.id}: ${user.name}`}
            </Text>
        )))
}

export default Entry;