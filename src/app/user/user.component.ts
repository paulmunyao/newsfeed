import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  msg!: string;
  isDisplay = true;
  public show: boolean = false;
  public isShown: boolean = false;
  public shown: boolean = false;
  public view: boolean = false;
  public info: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleDisplay() {
    this.msg = 'Friend1 liked a photo of friend2';
    this.isDisplay = !this.isDisplay;
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
    
  }
}
