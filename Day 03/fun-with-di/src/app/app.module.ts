import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdderComponent } from './components/adder/adder.component';
import { AdditionService } from './services/addition.service';
import { GroupComponent } from './components/group/group.component';
import { HistoryService } from './services/history.service';
import { AdderTwoComponent } from './components/adder-two/adder-two.component';
import { environment } from 'src/environments/environment';

export const URL_TOKEN = new InjectionToken<string>("the url of the server");

@NgModule({
  declarations: [
    AppComponent,
    AdderComponent,
    GroupComponent,
    AdderTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AdditionService, 
    {provide: URL_TOKEN, useValue: environment.myUrl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
