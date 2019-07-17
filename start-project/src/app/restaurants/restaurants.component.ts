import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './restaurant/restaurant.model';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  public listRestaurants:Restaurant[] = [];

  constructor(private negocioRestaurant: RestaurantsService) { 

    this.negocioRestaurant.listaRestaurants().subscribe( result =>{
      this.listRestaurants = result;

     console.log(result) 
    })
  }

  ngOnInit() {
  }

}
