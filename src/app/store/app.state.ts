import { categoriesReducer } from "../super-user/category-page/srore/categories.reducer";
import { CategoriesState } from "../super-user/category-page/srore/categories.state";
import { servicesReducer } from "../super-user/service-page/store/services.reducer";
import { usersReducer } from "../super-user/user-page/store/users.reducer";

export interface AppState{
    categories: CategoriesState
}

export const AppReducers: any = {
    categories: categoriesReducer,
    users: usersReducer,
    services: servicesReducer
}