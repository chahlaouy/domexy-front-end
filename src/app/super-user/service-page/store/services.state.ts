import { Service } from "src/app/shared/models/service.model";

export interface ServicesState{
    entities: Service[],
    loading: boolean,
    loaded: boolean,
    error: ""
}

export const initialState: ServicesState = {
    entities: [
        {
            id: 1,
            name: "automobile",
            category: "mecanique",
            description: "description one",
            img: ""
        }
    ],
    loaded: false,
    loading: false,
    error: ""
}