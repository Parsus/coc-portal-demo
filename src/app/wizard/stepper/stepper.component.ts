import { Component } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'wizard-stepper',
  templateUrl: './stepper.component.html',
  providers: [{
    provide: CdkStepper,
    useExisting: StepperComponent
  }]
})
export class StepperComponent extends CdkStepper { }
