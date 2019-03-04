import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HaveLicenseComponent } from './have-license/have-license.component';
import { NeedLicenseComponent } from './need-license/need-license.component';
import { BusinessInfoComponent } from './business-info/business-info.component';

const routes: Routes = [
  {
    path: '',
    component: HaveLicenseComponent
  },
  {
    path: 'do-you-need-a-business-license',
    component: NeedLicenseComponent
  },
  {
    path: 'business-info',
    component: BusinessInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WizardRoutingModule { }
