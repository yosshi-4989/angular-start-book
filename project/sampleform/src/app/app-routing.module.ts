import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from "@angular/router";
import { SimpleFprmComponent } from "./simple-fprm/simple-fprm.component";
import { BetterFormComponent } from "./better-form/better-form.component";
import { ControlsComponent } from "./controls/controls.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/simple-form', pathMatch: 'full'}, // ルートはsimple-formへリダイレクト
      {path: 'simple-form', component: SimpleFprmComponent},
      {path: 'better-form', component: BetterFormComponent},
      {path: 'controls', component: ControlsComponent},
    ])
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
