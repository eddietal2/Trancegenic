import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

interface MembershipUser {
  firstName: string,
  lastName: string,
  city: string,
  zip: string,
  state: string,
  email: string,
}


@Injectable({
  providedIn: 'root'
})
export class LandingService {
  BACKEND_URL = environment.url;
  TOKEN_KEY = 'access_token';


  constructor(
    private http: HttpClient,
    ) { }

  /**
   * Get all the featured posts for the Landing Page
   * @returns Landing Page Featured Products Observerable
   */
  getLandingFeaturedPosts() {
    return this.http.get(`${this.BACKEND_URL}/products/get-featured-products`)
      .subscribe( (featuredProducts) => {
        // console.log(featuredProducts);
      });
  }

  /**
   * 
   * @param user MembershipUser
   * @returns Landing Page Featured Products Observerable
   */

  
  membershipSignUp(user: MembershipUser) {
    return this.http.post(`${this.BACKEND_URL}/products/membership-sign-up`, user)
      .subscribe( (membershipSignUpResponse) => {
        // console.log(membershipSignUpResponse);
      })
  }
}
