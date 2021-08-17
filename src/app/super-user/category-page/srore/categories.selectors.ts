import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CategoriesState } from "./categories.state";


const getCategoriesState = createFeatureSelector<CategoriesState>('categories');

export const getCategoriesEntities = createSelector(getCategoriesState, state => {

    return state.entities;
});

export const getCategoriesLoadingState = createSelector(getCategoriesState, state => {

    return state.loading;
});

export const getCategoriesLoadedState = createSelector(getCategoriesState, state => {

    return state.loaded;
});

export const getCategoriesErrors = createSelector(getCategoriesState, state => {

    return state.error;
});