import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ListContactComponent } from './contact/list.component';
import { AddContactComponent } from './contact/add.component';

import { ContactService } from './_services/contact.service';

import { AppRoutingModule } from './_routing/routing.module';

@NgModule({
  declarations: [
      AppComponent,
      ListContactComponent,
      AddContactComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule
  ],
  providers: [
      ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
