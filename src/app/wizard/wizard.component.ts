import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { slideOpenClosedAnimation } from './wizard.animations';

@Component({
  selector: 'coc-wizard',
  templateUrl: './wizard.component.html',
  animations: [slideOpenClosedAnimation]
})
export class WizardComponent implements OnInit {
  step1FormGroup: FormGroup;
  step2FormGroup: FormGroup;
  step3FormGroup: FormGroup;
  step4FormGroup: FormGroup;
  
  animationState = 'closed';

  openCloseAddressPanel(event) {
    var target = event.target;
    if (target.id === 'needLicense' && target.checked) {
      this.animationState = 'open';
    } else {
      this.animationState = 'closed';
    }
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.step1FormGroup = this.fb.group({
      alreadyHaveLicense: ['', Validators.required]
    });

    this.step2FormGroup = this.fb.group({
      needBusinessLicense: ['', Validators.required],
      addressLine1: [],
      addressLine2: [],
      addressCity: [],
      addressZip: []
    });

    this.step3FormGroup = this.fb.group({
      liquor: [],
      secondHandGoods: [],
      doorToDoor: [],
      massageServices: [],
      nonProfitSolicitor: []
    });

    this.step4FormGroup = this.fb.group({
      bingo: [],
      offTrackBetting: [],
      sob: [],
      escort: []
    });
  }

}
