import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path : '' , redirectTo : 'Home' , pathMatch : 'full'},
  {path : 'Home' , component : HomeComponent},
  {path : 'About' , component : AboutComponent},
  {path : 'Portfolio' , component : PortfolioComponent},
  {path : 'Contact' , component : ContactComponent},
  {path : '**' , component : NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
