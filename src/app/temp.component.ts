import { Component } from '@angular/core';

@Component({
  selector: 'app-temp',
  template: `
    <div class="container py-6">
      <h1>
        City of Chandler Business Registration & License Portal
      </h1>
      <h2>Modules</h2>
      <ul>
        <li>
          <a routerLink="wizard">Wizard</a>
        </li>
      </ul>
      <h2>Libraries used on front-end:</h2>
      <ul>
        <li>
          <a target="_blank" rel="noopener" href="https://angular.io/cli">Angular CLI</a>
        </li>
        <li>
          <a target="_blank" rel="noopener"
            href="https://getbootstrap.com/docs/4.2/getting-started/introduction/">Bootstrap</a>
        </li>
        <li>
          <a target="_blank" rel="noopener" href="https://valor-software.com/ngx-bootstrap/#/documentation">NGX
            Bootstrap</a>
        </li>
      </ul>
    </div>
  `
})
export class TempComponent {
  
}
