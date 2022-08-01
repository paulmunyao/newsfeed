import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  msg!: string;
  isDisplay = false;

  constructor() {}

  ngOnInit(): void {}

  toggleDisplay() {
    this.isDisplay = !this.isDisplay;
    this.msg = 'Button is clicked';
    return this.msg;
  }
}
