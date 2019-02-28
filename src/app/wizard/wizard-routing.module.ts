import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlreadyHaveLicenseComponent } from './already-have-license/already-have-license.component';

const routes: Routes = [
  {
    path: '',
    component: AlreadyHaveLicenseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WizardRoutingModule { }
