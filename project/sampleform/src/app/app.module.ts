import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleFprmComponent } from './simple-fprm/simple-fprm.component';
import { BetterFormComponent } from './better-form/better-form.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleFprmComponent,
    BetterFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
