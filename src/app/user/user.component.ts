import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  msg!: string;

  constructor() {}

  ngOnInit(): void {}

  showEvent($event) {
    this.msg = 'Button is clicked';
    return this.msg;
  }
}
