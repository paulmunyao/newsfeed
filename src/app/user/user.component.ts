import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  msg!: string;
  public showDisplay: boolean = false;
  public show: boolean = false;
  public isShown: boolean = false;
  public shown: boolean = false;
  public view: boolean = false;
  public info: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleDisplay() {
    this.showDisplay = !this.showDisplay;
    if (this.showDisplay) this.msg = ""
    else this.msg = ""
  }

  toggle() {
    this.show = !this.show;
    if (this.show) this.msg = 'Hide';
    else this.msg = 'Show';
  }

  toggleShow() {
    this.isShown = !this.isShown;
    if (this.isShown) this.msg = 'Show';
    else this.msg = 'Show';
  }

  toggleNotification() {
    this.shown = !this.shown;
    if (this.shown) this.msg = 'Paul';
    else this.msg = 'Pa';
  }

  toggleView() {
    this.view = !this.view;
    if (this.view) this.msg = 'View';
    else this.msg = 'no view';
  }

  toggleInfo() {
    this.info = !this.info;
    if (this.info) this.msg = 'Info';
    else this.msg = 'no info';
  }
}
