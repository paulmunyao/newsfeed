import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public show: boolean = false;
  public msg: any = 'Show';
  isDisplay = true;
  public isShown: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleDisplay() {
    this.msg = 'Friend1 liked a photo of friend2';
    this.isDisplay = !this.isDisplay;
  }

  toggle() {
    this.msg = 'Hide';
    this.toggle = !this.isToggle;
    this.show = !this.show;
    if (this.show) this.msg = 'Hide';
    else this.msg = 'Show';
  }

  toggleShow() {
    this.isShown = !this.isShown;
    if (this.isShown) this.msg = 'Show';
    else this.msg = 'Show';
  }
}
