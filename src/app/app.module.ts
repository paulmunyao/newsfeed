import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ButtonComponent } from './button/button.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [AppComponent, ItemsComponent, ButtonComponent, UserComponent],
  imports: [BrowserModule, AppRoutingModule,MatButtonModule],
  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
