import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  @Output() parentFunction: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  
  }

  sendData()
  {
    let data = {name:'Hart', age:25}
    this.parentFunction.emit(data);
  }

}
