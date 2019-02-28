import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TempComponent } from './temp.component';

const routes: Routes = [
  {
    path: 'wizard',
    loadChildren: './wizard/wizard.module#WizardModule'
  },
  {
    path: '',
    component: TempComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
