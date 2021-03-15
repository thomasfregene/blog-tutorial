import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blog app';
  users = [
    {
      name: 'Mark',
      age: 22,
      address: 'New York',
    },
    {
      name: 'Paul',
      age: 29,
      address: 'Boston',
    },
    {
      name: 'James',
      age: 22,
      address: 'New Mexico',
    },
  ];
}
