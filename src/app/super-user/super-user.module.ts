import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './super-user-routing.module';
import { LayoutsModule } from '../shared/shared.module';
import { BasicTableComponent } from './dashboard-page/layouts/basic-table/basic-table.component';
import { CircleChartComponent } from './dashboard-page/layouts/circle-chart/circle-chart.component';
import { LineChartComponent } from './dashboard-page/layouts/line-chart/line-chart.component';
import { CardComponent } from './dashboard-page/layouts/card/card.component';
import { AddCategoryComponent } from './category-page/add-category/add-category.component';
import { CategoryListComponent } from './category-page/categories-list/categories-list.component';
import { DatatableComponent } from './category-page/layouts/datatable/datatable.component';
import { CategoryFormComponent } from './category-page/layouts/category-form/category-form.component';
import { ProPageComponent } from './pro-page/pro-page.component';
import { AddUserComponent } from './user-page/add-user/add-user.component';
import { UsersListComponent } from './user-page/users-list/users-list.component';
import { UserFormComponent } from './user-page/layouts/user-form/user-form.component';
import { UserDatatableComponent } from './user-page/layouts/user-datatable/user-datatable.component';
import { AddServiceComponent } from './service-page/add-service/add-service.component';
import { ServicesListComponent } from './service-page/services-list/services-list.component';
import { ServiceFormComponent } from './service-page/layouts/service-form/service-form.component';
import { ServiceDatatableComponent } from './service-page/layouts/service-datatable/service-datatable.component';
import { ProCardComponent } from './pro-page/layouts/pro-card/pro-card.component';
import { CategoryModalComponent } from './category-page/layouts/category-modal/category-modal.component';


@NgModule({
  declarations: [
    DashboardPageComponent,
    BasicTableComponent,
    CircleChartComponent,
    LineChartComponent,
    CardComponent,
    AddCategoryComponent,
    CategoryListComponent,
    DatatableComponent,
    CategoryFormComponent,
    ProPageComponent,
    ProCardComponent,
    AddUserComponent,
    UsersListComponent,
    UserFormComponent,
    UserDatatableComponent,
    AddServiceComponent,
    ServicesListComponent,
    ServiceFormComponent,
    ServiceDatatableComponent,
    ProCardComponent,
    CategoryModalComponent
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutsModule
  ],
  exports:[DashboardPageComponent]
})
export class DashboardModule { }
