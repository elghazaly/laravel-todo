import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { LayoutComponent } from './layout.component';
import { DetailsComponent } from './details.component';
import { CreateComponent } from './create.component';
import { NgxSelectModule } from 'ngx-select-ex';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TaskRoutingModule,
    NgxSelectModule,
  ],
  declarations: [
    LayoutComponent,
    DetailsComponent,
    CreateComponent
  ]
})
export class TaskModule { }
