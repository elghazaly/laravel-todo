import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { LayoutComponent } from './layout.component';
import { DetailsComponent } from './details.component';
import { CreateComponent } from './create.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TaskRoutingModule
  ],
  declarations: [
    LayoutComponent,
    DetailsComponent,
    CreateComponent
  ]
})
export class TaskModule { }
