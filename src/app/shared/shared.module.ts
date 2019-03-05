import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CollapseModule.forRoot(),
    TooltipModule.forRoot()
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    CollapseModule,
    TooltipModule
  ]
})
export class SharedModule { }
