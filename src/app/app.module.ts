import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { AddEditCardComponent } from './add-edit-card/add-edit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    AddEditCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
