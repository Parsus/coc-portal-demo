import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { WizardRoutingModule } from './wizard-routing.module';
import { WizardComponent } from './wizard.component';
import { HaveLicenseComponent } from './have-license/have-license.component';
import { NeedLicenseComponent } from './need-license/need-license.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { BusinessInfoComponent } from './business-info/business-info.component';
import { BusinessAdditionalInfoComponent } from './business-additional-info/business-additional-info.component';

@NgModule({
  declarations: [
    WizardComponent,
    HaveLicenseComponent,
    NeedLicenseComponent,
    ProgressBarComponent,
    BusinessInfoComponent,
    BusinessAdditionalInfoComponent
  ],
  imports: [
    SharedModule,
    WizardRoutingModule
  ],
  entryComponents: [WizardComponent]
})
export class WizardModule { }
