import {User} from "../types/user";
import {create} from "zustand/react";

type UserStore = {
    users: User[];
    setUsers: (users: User[]) => void;
};

export const useUserStore = create<UserStore>((set) => ({
    users: [],
    setUsers: (users) => set({ users }),
}));