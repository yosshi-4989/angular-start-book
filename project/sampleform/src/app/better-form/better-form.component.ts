import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-better-form',
  templateUrl: './better-form.component.html',
  styleUrls: ['./better-form.component.css']
})
export class BetterFormComponent implements OnInit {
  calcForm: FormGroup;
  result: string = "足しましょう";

  constructor() { }

  ngOnInit() {
    // フォームグループの作成
    this.calcForm = new FormGroup({
      // 入力フォームを定義
      "fieldOne": new FormControl("0", Validators.required), // "0"は入力フォームの初期値
      "fieldTwo": new FormControl("0", [Validators.required, Validators.maxLength(5)]), // "0"は入力フォームの初期値
    });
  }

  // FormGroupオブジェクトのcalcFormへはHTMLからアクセスできるが、
  // FormControllオブジェクトへは直接アクセスできないので、アクセスできるようにアクセサを作成する
  get fieldOne() { return this.calcForm.get("fieldOne"); }
  get fieldTwo() { return this.calcForm.get("fieldTwo"); }

  addAnyWay() {
    let text1: string = this.fieldOne.value;
    let text2: string = this.fieldTwo.value;
    let resultStr: string = "";

    if (Number.isNaN(Number(text1)) || Number.isNaN(Number(text2))) {
      resultStr = text1 + text2
    } else {
      resultStr = `${text1}+${text2} = ${Number(text1) + Number(text2)}`;
    }
    this.result = resultStr;
  }
  clearResult() {
    this.result = "";
  }
}
