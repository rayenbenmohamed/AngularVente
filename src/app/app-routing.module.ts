import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './products/index/index.component';
import { ViewComponent } from './products/view/view.component'
import { CreateComponent } from './products/create/create.component';
import { EditComponent } from './products/edit/edit.component';
import { EcommerceComponent } from './shopping-cart/ecommerce/ecommerce.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'ecommerce', component: EcommerceComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'navbar', component: NavbarComponent},
  { path: 'footer', component:FooterComponent },
 { path: 'about', component: AboutComponent },
 { path: 'contact', component: ContactComponent },
{ path: 'products/index', component: IndexComponent },
{ path: 'products/:productId/view', component: ViewComponent },
{ path: 'products/create', component: CreateComponent },
{ path: 'products/:productId/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
