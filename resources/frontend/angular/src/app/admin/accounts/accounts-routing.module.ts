import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AddEditComponent } from './add-edit.component';

const routes: Routes = [
  { path: 'add', component: AddEditComponent },
  { path: 'edit/:id', component: AddEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
