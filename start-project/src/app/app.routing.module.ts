import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

const routes: Routes = [
 {path: 'about', component: AboutComponent},
 {path: 'home', component: HomeComponent},
 {path: 'restaurants', component: RestaurantsComponent},
 {path: 'restaurants/:id', component: RestaurantDetailComponent},
 {path: '', component: HomeComponent},
 {path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
