import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SettingsPanelComponent } from './components/settings-panel/settings-panel.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SettingsPanelComponent,
    SidebarComponent,
    FooterComponent,
    DashboardHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SettingsPanelComponent,
    SidebarComponent,
    FooterComponent,
    DashboardHeaderComponent
  ]
})
export class LayoutsModule { }
