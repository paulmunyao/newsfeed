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
    var x = document.getElementById('myDiv');
    if (x!.innerHTML === 'Friend1') {
      x!.innerHTML = 'oojdsdiwd';
    } else {
      x!.innerHTML = 'Friend1';
    }
    this.msg = 'Friend1 liked a photo of friend2';
    this.isDisplay = !this.isDisplay;

    // return this.msg;
  }

  myFunction(){
    var x = document.getElementById('myDiv');
    if (x!.innerHTML ==="Friend1"){
      x!.innerHTML="ojjjj";
    }

  }
}
