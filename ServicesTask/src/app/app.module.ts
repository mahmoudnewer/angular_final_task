import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { ContentComponent } from './Components/content/content.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { AddEditComponent } from './Components/add-edit/add-edit.component';
import { ViewComponent } from './Components/view/view.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContentComponent,
    AddProductComponent,
    AddEditComponent,
    ViewComponent,
    LogInComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
