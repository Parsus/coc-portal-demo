import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    CollapseModule.forRoot(),
    TooltipModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    CollapseModule,
    TooltipModule
  ]
})
export class SharedModule { }
