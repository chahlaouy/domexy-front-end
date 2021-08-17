import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UsersState } from "./users.state";


const getUsersState = createFeatureSelector<UsersState>('users');

export const getUsersEntites = createSelector(getUsersState, state => {
    return state.entities;
});

export const getUsersLoadingState = createSelector(getUsersState, state => {
    return state.loading;
});

export const getUsersLoadedState = createSelector(getUsersState, state => {
    return state.loaded;
});

export const getUsersError = createSelector(getUsersState, state => {
    return state.error;
});