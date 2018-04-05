import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chech-modulus',
  templateUrl: './chech-modulus.component.html',
  styleUrls: ['./chech-modulus.component.css']
})
export class ChechModulusComponent implements OnInit {

  constructor() {
    this.print();
   }

  ngOnInit() {
  }
  print(){
    let i: number;
    let numStart: number = -50;
    let numEnd: number = 50;
    for (i = numStart; i<= numEnd; i++){
      if(i % 3 == 0)
        console.log(i+"Bash");
      else if(i % 5 == 0)
        console.log(i+"Bish");
      if(i % 3 == 0 && i % 5 == 0)
        console.log(i+"BishBash");
    }
  }
}
