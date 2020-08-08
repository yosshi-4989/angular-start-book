import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  coffeeForm: FormGroup;
  hotcoldsel = ["Hot", "Cold"];
  addssel = ["Milk", "Sugar"];
  nutsel = ["ピーナッツ", "アーモンド", "くるみ"];

  // FormBuilderってなんぞ？FormGroupやFormControllの生成を簡略化するラッパークラス？
  // とりあえずフォームの管理が簡単になるようなものという認識で行く
  constructor(private fb: FormBuilder) {
    this.coffeeForm = this.fb.group({
      name: ["ブレンド", Validators.required], // 今回は確定がないので意味ないが、リストにして渡すことでバリデーションを指定できる
      taste: ["バランスのよい口当たり", [Validators.required, Validators.maxLength(10)]], // 複数のバリデーションは前回と同じようにリストにする
      hotcold: this.hotcoldsel[0],
      adds: this.fb.array([]),
      nut: this.nutsel[0],
    })
  }

  get name() { return this.coffeeForm.get("name"); }
  get taste() { return this.coffeeForm.get("taste"); }

  onCheckChanged(item: string, isChecked: boolean) {
    let formArray = <FormArray>this.coffeeForm.controls.adds;
    if (isChecked) {
      formArray.push(new FormControl(item));
    } else {
      let index = formArray.controls.findIndex(elm => elm.value == item);
      formArray.removeAt(index);
    }
  }

  ngOnInit() {
  }
}
