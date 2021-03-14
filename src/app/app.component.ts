import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog app';
  color="red";
  err=true;

  updateColor(){
    this.err=!this.err;
  }
}
