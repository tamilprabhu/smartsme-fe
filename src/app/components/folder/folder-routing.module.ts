import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { EmployeeComponent } from '../employee/employee.component';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'employee',
    component: EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
