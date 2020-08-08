import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

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
      name: "ブレンド",
      taste: "バランスのよい口当たり",
      hotcold: this.hotcoldsel[0],
      adds: this.fb.array([]),
      nut: this.nutsel[0],
    })
  }

  get name() { return this.coffeeForm.get("name"); }
  get taste() { return this.coffeeForm.get("taste"); }
  get hotcold() { return this.coffeeForm.get("hotcold"); }
  get adds() { return this.coffeeForm.get("adds"); }
  get nut() { return this.coffeeForm.get("nut"); }

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
