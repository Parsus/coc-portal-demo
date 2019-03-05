import { NgModule } from '@angular/core';
import { CdkStepperModule } from '@angular/cdk/stepper';

import { SharedModule } from '../shared/shared.module';
import { WizardRoutingModule } from './wizard-routing.module';
import { WizardComponent } from './wizard.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StepperComponent } from './stepper/stepper.component';

@NgModule({
  declarations: [
    WizardComponent,
    ProgressBarComponent,
    StepperComponent
  ],
  imports: [
    SharedModule,
    CdkStepperModule,
    WizardRoutingModule
  ],
  entryComponents: [WizardComponent]
})
export class WizardModule { }
