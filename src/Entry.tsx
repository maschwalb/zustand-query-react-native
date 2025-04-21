import {Text, View} from "react-native";
import {useQuery} from "@tanstack/react-query";
import {getUsers} from "./api/user";
import {useUserStore} from "./store/userStore";
import {useEffect} from "react";

const Entry = () => {

    const { users, setUsers } = useUserStore();

    const { data } = useQuery({
        queryKey: ['users'],
        queryFn: () => getUsers(),
    });

    useEffect(() => {
        if (data) {
            setUsers(data);
        }
    }, [data]);

    return (users.map((user) => (
        <Text key={user.id}>
            {`${user.id}: ${user.name}`}
        </Text>
    )))
}

export default Entry;