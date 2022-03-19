import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ProductsService } from 'src/app/services/products/products.service';
import { LoginService } from 'src/app/services/onboarding/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favorite-icon',
  templateUrl: './favorite-icon.component.html',
  styleUrls: ['./favorite-icon.component.scss'],
  animations: [

    trigger('heart', [
        state('unfavorited', style({
            color: '#999',
            opacity: '1',
            transform: 'scale(0.9)'
        })),
        state('favorited', style({
            // color: '#0000c4',
            opacity: '1',
            transform: 'scale(1)'

        })),

        transition('unfavorited <=> favorited', animate('100ms ease-out'))
    ])
  ]
})
export class FavoriteIconComponent implements OnInit, AfterViewInit {
  favoriteState = "unfavorited";
  public iconName = 'heart';
  @Input() id;
  @Input() email;
  @Input() userFavorites;
  @Output() favoritedAnimation = new EventEmitter<Object>();
  @Output() unFavoritedAnimation = new EventEmitter<Object>();
  favStateOnSub: Subscription;
  favStateOffSub: Subscription;

  constructor(
    private productsService: ProductsService,
    private loginService: LoginService
  ) { }

  ngAfterViewInit(): void {
    // console.clear();
    // console.log(this.productID);
      
  }

  ngOnInit() {
    this.checkFavroiteState(this.userFavorites, this.id)

  }

  /**
   * 
   * @param userFavorites 
   * @param id 
   */
  checkFavroiteState(userFavorites: any, id: string) {
    console.log(id);
    console.log(userFavorites);
    

    if(userFavorites.includes(id)) {
      this.setFavoriteStateOn();
    }
    if(!userFavorites.includes(id)) {
      this.setFavoriteStateOff();

    }
    return;
    
  }

  toggleLikeState() {
    if (this.favoriteState == 'unfavorited') {
      this.setFavoriteStateOn()
    }
    else {
      this.setFavoriteStateOff()
    }

  }

  setFavoriteStateOn() {
    this.favStateOnSub = this.productsService.favoriteProduct(this.id, this.email)
      .subscribe(data => {
        this.favoriteState = 'favorited';
        // this.loginService.userFavorites.next(Object.values(data));
        this.favoritedAnimation.emit({
          favorited: true,
          });
          return;
      })

      setTimeout(() => {
        this.favStateOnSub.unsubscribe()
      }, 0);
 }
  setFavoriteStateOff() {
    this.favStateOffSub = this.productsService.unFavoriteProduct(this.id, this.email)
      .subscribe(data => {
        this.favoriteState = 'unfavorited';
        // this.loginService.userFavorites.next(Object.values(data));
        this.unFavoritedAnimation.emit({
          favorited: false,
          });
          return;
      })

      setTimeout(() => {
        this.favStateOffSub.unsubscribe()
      }, 0);
  }

}
