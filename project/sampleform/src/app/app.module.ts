import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
