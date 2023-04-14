import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { productcomponent } from './product/product.component';
import{ProductsComponent}from './products/products.component'
import { FormsModule } from '@angular/forms';
import { SkillsetsComponent } from './skillsets/skillsets.component';
import { StudentsComponent } from './students/students.component';
import { CardsComponent } from './cards/cards.component';
import { TabComponent } from './tab/tab.component';


@NgModule({
  declarations: [
    AppComponent,
    productcomponent,
    ProductsComponent,
    SkillsetsComponent,
    StudentsComponent,
    CardsComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
