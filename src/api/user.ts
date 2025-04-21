import {User} from "../types/user";

type GetUsersFilters = {
    limit: number;
    page: number
}

export async function getUsers(filters?: GetUsersFilters): Promise<User[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return [{id: 1, name: 'matu'}];
}