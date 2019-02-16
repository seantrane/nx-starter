import { Component } from '@angular/core';

import { appMetadata } from './app.metadata';

@Component({
  selector: 'nxsweb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = appMetadata.title;
}
