import { createReducer } from "@ngrx/store";
import { CategoriesState, initialState } from "./categories.state";

const _categoriesReducer = createReducer(initialState);


export function categoriesReducer(state: CategoriesState, action: any){

    return _categoriesReducer(state, action);
}