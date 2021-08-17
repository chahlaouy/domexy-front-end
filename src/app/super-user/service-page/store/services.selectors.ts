import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ServicesState } from "./services.state";

const getServicesState = createFeatureSelector<ServicesState>('services');

export const getServicesEntities = createSelector(getServicesState, state => {

    return state.entities;
});

export const getServicesLoadingState = createSelector(getServicesState, state => {

    return state.loading;
});

export const getServicesLoadedState = createSelector(getServicesState, state => {

    return state.loaded;
});

export const getServicesError = createSelector(getServicesState, state => {

    return state.error;
});