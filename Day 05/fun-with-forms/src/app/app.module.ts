import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorsPresenterComponent } from './errors-presenter/errors-presenter.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorsPresenterComponent
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
