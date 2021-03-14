import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog app';
  data = [
    {
      name: 'anil',
      age: '25',
      email: 'anil@gmail.com'
    },
    {
      name: 'kelly',
      age: '20',
      email: 'kelly@gmail.com'
    },
    {
      name: 'sam',
      age: '35',
      email: 'sam@gmail.com'
    },
    {
      name: 'phil',
      age: '19',
      email: 'phil@gmail.com'
    },
  ];
}
