import { createReducer } from "@ngrx/store";
import { initialState, ServicesState } from "./services.state";

const _servicesReducer = createReducer(initialState);

export function servicesReducer(state: ServicesState, action: any){

    return _servicesReducer(state, action);
}