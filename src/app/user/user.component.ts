import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  msg!: string;
  isDisplay = tru;

  constructor() {}

  ngOnInit(): void {}

  toggleDisplay() {
    this.msg = 'Button is clicked';
    this.isDisplay = !this.isDisplay;
    
    // return this.msg;
  }
}
