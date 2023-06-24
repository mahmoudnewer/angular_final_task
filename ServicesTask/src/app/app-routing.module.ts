import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './Components/content/content.component';
import { AddEditComponent } from './Components/add-edit/add-edit.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { ViewComponent } from './Components/view/view.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';

const routes: Routes = [
  {path:'home', component : ContentComponent },
  {path:'login', component : LogInComponent },
  {path:'products', component : AddProductComponent },
  {path:'products/:id', component : ViewComponent },
  {path:'products/:id/edit', component :AddEditComponent},
  {path :'' , component : ContentComponent},
  {path:'**' , component : NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
