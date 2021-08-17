import { User } from "src/app/shared/models/user.model";

export interface UsersState{
    entities: User[],
    loading: boolean,
    loaded: boolean,
    error: string
}

export const initialState: UsersState = {
    entities: [
        {
            id: 1,
            firstname: "ala",
            lastname: "benfoulen",
            email: "email@email.com",
            password: "",
            role: "ADMIN",
            username: "alaBen"
        },
    ],
    loaded: false,
    loading: true,
    error: ""
}