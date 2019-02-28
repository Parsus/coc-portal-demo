import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardRoutingModule } from './wizard-routing.module';
import { WizardComponent } from './wizard.component';
import { AlreadyHaveLicenseComponent } from './already-have-license/already-have-license.component';

@NgModule({
  declarations: [WizardComponent, AlreadyHaveLicenseComponent],
  imports: [
    CommonModule,
    WizardRoutingModule
  ],
  entryComponents: [WizardComponent]
})
export class WizardModule { }
