import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { AddEditCardComponent } from './add-edit-card/add-edit-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    AddEditCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
