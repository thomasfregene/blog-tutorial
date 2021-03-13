import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog app';

  currentVal = "";

  getVal(val:any)
  {
    console.warn(val);

    this.currentVal = val
  }
}
