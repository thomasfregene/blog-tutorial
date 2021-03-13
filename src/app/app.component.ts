import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'blog app';
  myName = 'Mike'

  myEvent(event:any)
  {
    console.warn(event);
  }
}
