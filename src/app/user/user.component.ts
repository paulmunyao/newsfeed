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
    this.msg = 'Friend1 liked a photo of friend2';
    this.isDisplay = !this.isDisplay;
  }

  myFunction() {
    // var x = document.getElementById('myDiv');
    if (x!.innerHTML === 'Friend1') {
      x!.innerHTML = 'ojjjj';
    } else {
      x!.innerHTML = 'Friend1';
    }
  }
}
