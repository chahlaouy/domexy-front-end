import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './category-page/add-category/add-category.component';
import { CategoryListComponent } from './category-page/categories-list/categories-list.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ProPageComponent } from './pro-page/pro-page.component';
import { AddServiceComponent } from './service-page/add-service/add-service.component';
import { ServicesListComponent } from './service-page/services-list/services-list.component';
import { AddUserComponent } from './user-page/add-user/add-user.component';
import { UsersListComponent } from './user-page/users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent
  },
  {
    path: 'liste-catégorie',
    component: CategoryListComponent
  },
  {
    path: 'ajouter-catégorie',
    component: AddCategoryComponent
  },
  {
    path: 'liste-professionels',
    component: ProPageComponent
  },
  {
    path: 'ajouter-utilisateur',
    component: AddUserComponent
  },
  {
    path: 'liste-utilisateur',
    component: UsersListComponent
  },
  {
    path: 'ajouter-service',
    component: AddServiceComponent
  },
  {
    path: 'liste-services',
    component: ServicesListComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
