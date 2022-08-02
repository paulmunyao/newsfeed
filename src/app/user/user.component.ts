import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public show:boolean = false;
  public msg:any = 'Show';
  // msg!: string;
  isDisplay = true;

  constructor() {}

  ngOnInit(): void {}

  toggleDisplay() {
    this.msg = 'Friend1 liked a photo of friend2';
    this.isDisplay = !this.isDisplay;
  }

  toggle(){
    
  }
}
