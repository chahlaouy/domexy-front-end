import { Category } from "src/app/shared/models/category.model";

export interface CategoriesState{
    entities: Category[],
    loading: boolean,
    loaded: boolean,
    error: string
}

export const initialState: CategoriesState = {
    entities: [
        {
            id: 1,
            parent: "uncathecorized",
            name: "Automobile",
            description: "description one",
            img: ""
        },
        {
            id: 2,
            parent: "uncathecorized",
            name: "Coiffure",
            description: "description two",
            img: ""
        },
        {
            id: 3,
            parent: "uncathecorized",
            name: "Mecanique",
            description: "description three",
            img: ""
        },
        {
            id: 4,
            name: "Medecine",
            parent: "uncathecorized",
            description: "description four",
            img: ""
        },
    ],
    loading: false,
    loaded: false,
    error: ""
    
}