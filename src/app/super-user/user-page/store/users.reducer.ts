import { createReducer } from "@ngrx/store";
import { initialState, UsersState } from "./users.state";

const _usersReducer = createReducer(initialState);

export function usersReducer(state: UsersState, action: any){

    return _usersReducer(state, action);
}