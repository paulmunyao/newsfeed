import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  msg!: string;
  isDisplay = true;

  constructor() {}

  ngOnInit(): void {}

  toggleDisplay() {
    this.msg = '';
    this.isDisplay = !this.isDisplay;

    // return this.msg;
  }
}
