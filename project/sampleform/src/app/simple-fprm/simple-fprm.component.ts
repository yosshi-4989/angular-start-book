import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-fprm',
  templateUrl: './simple-fprm.component.html',
  styleUrls: ['./simple-fprm.component.css']
})
export class SimpleFprmComponent implements OnInit {
  result:string = "足し算しましょう";
  text1:string = "0";
  text2:string = "0";

  constructor() { }

  ngOnInit() {
  }

  addAndShow() : void {
    let result = "正しい値を入力してください";
    let int1:number = Number(this.text1);
    let int2:number = Number(this.text2);

    if (!Number.isNaN(int1) && !Number.isNaN(int2)) {
      result = `${int1}+${int2}=${int1+int2}`;
    }
    this.result = result;
  }
}
