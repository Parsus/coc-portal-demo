import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'coc-wizard',
  templateUrl: './wizard.component.html'
})
export class WizardComponent implements OnInit {
  step1FormGroup: FormGroup;
  step2FormGroup: FormGroup;
  step3FormGroup: FormGroup;
  step4FormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.step1FormGroup = this.fb.group({
      alreadyHaveLicense: ['', Validators.required]
    });

    this.step2FormGroup = this.fb.group({
      needBusinessLicense: ['', Validators.required]
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
