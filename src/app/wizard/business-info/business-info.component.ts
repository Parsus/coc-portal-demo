import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wizard-business-info',
  templateUrl: './business-info.component.html'
})
export class BusinessInfoComponent implements OnInit {
  progress = 80;

  constructor() { }

  ngOnInit() {
  }

}
