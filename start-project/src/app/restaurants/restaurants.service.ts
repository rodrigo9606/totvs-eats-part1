import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Restaurant } from './restaurant/restaurant.model';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class RestaurantsService {

    constructor(private http: HttpClient) {}

    listaRestaurants() {
        return this.http
            .get<Restaurant[]>(API + '/restaurants');

    }

    resturantbyID(id: string){
        return this.http.get<Restaurant>(`${API}/restaurants/${id}`);
    }
}