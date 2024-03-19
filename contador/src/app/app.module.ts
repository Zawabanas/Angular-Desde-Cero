import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './Counter/counter.component';
import { ButtonAddComponent } from './Counter/button-add/button-add.component';
import { ButtonDisComponent } from './counter/button-dis/button-dis.component';

@NgModule({
  declarations: [AppComponent, CounterComponent, ButtonAddComponent, ButtonDisComponent],
  imports: [BrowserModule,AppRoutingModule],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
