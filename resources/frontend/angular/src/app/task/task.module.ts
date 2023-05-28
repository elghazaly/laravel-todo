import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { LayoutComponent } from './layout.component';
import { DetailsComponent } from './details.component';
import { CreateComponent } from './create.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TaskRoutingModule,
    NgbTypeaheadModule,
  ],
  declarations: [
    LayoutComponent,
    DetailsComponent,
    CreateComponent
  ]
})
export class TaskModule { }
