import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AlertController, ToastController } from '@ionic/angular';
import { tap, catchError, reduce, map } from 'rxjs/operators';

interface Product {
  email: string,
  password: string,
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  BACKEND_URL = environment.url;
  cart$ = new BehaviorSubject([])

  constructor(
    private http: HttpClient) { }

  getAllProductsForLandingSearch() {
    return this.http.get(`${this.BACKEND_URL}/products/get-all-products`)
      .pipe(
        reduce(
          (acc: any, value: any, i: number) => {

            // let {_id, title} = value;
            
            return [...value.map( product => ({
              _id: product._id,
              price: product.price,
              picture: "https://www.freepnglogos.com/uploads/playstation-png-logo/playstation-png-logo-0.png",
              title: product.title.toLowerCase(),
            }))];
          }, [])
      )
  }

  getFeaturedProductsForLanding() {
    return this.http.get(`${this.BACKEND_URL}/products/get-featured-products`)
  }

  getAllProducts() {
    return this.http.get(`${this.BACKEND_URL}/products/get-all-products`)
  }

  getProductInfo(id: string) {
    return this.http.post(`${this.BACKEND_URL}/products/get-product-info`, {_id: id})
  }

  favoriteProduct(id: string, email: string) {
    return this.http.post(`${this.BACKEND_URL}/products/favorite-product`, {_id: id, email})
  }

  unFavoriteProduct(id: string, email: string) {
    return this.http.post(`${this.BACKEND_URL}/products/unfavorite-product`, {_id: id, email})
  }

  getCart(email: string) {
    return this.http.post(`${this.BACKEND_URL}/products/get-cart`, {email})
  }

  addToCart(id: string, email: string) {
    return this.http.post(`${this.BACKEND_URL}/products/add-to-cart`, {_id: id, email})
  }

  removeFromCart(id: string, email: string) {
    return this.http.post(`${this.BACKEND_URL}/products/remove-from-cart`, {_id: id, email})
  }

  postReview(id: string, email: string) {
    return this.http.post(`${this.BACKEND_URL}/products/remove-from-cart`, {_id: id, email})
  }
}
