import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { EmployeeComponent } from '../employee/employee.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    // RouterModule.forChild([{ path: '', component: FolderPage }])
    EmployeeComponent
  ],
  declarations: [FolderPage],
})
export class FolderPageModule {}
