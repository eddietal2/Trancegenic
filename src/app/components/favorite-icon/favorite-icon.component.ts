import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ProductsService } from 'src/app/services/products/products.service';

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
  @Output() favoritedAnimation = new EventEmitter<Object>();
  @Output() unFavoritedAnimation = new EventEmitter<Object>();

  constructor(
    private productsService: ProductsService
  ) { }

  ngAfterViewInit(): void {
    // console.clear();
    // console.log(this.productID);
      
  }

  ngOnInit() {
    console.log(this.id);
    console.log(this.email);
  }


  toggleLikeState() {
    if (this.favoriteState === 'unfavorited') {
      this.setFavoriteStateOn()
      // return this.jobs.favoriteThisJob(this.job);
    }
    else {
      this.setFavoriteStateOff()
      // return this.jobs.unFavoriteThisJob(this.job);
    }

  }
  setFavoriteStateOn() {
    this.productsService.favoriteProduct(this.id, this.email)
      .subscribe(data => {
        this.favoriteState = 'favorited';
        console.log('Favorited:' + data)
        this.favoritedAnimation.emit({
          favorited: true,
          });
          return;

      })
 }
  setFavoriteStateOff() {
    this.productsService.unFavoriteProduct(this.id, this.email)
      .subscribe(data => {
        this.favoriteState = 'unfavorited';
        console.log('Unfavorited:' + data)
        this.unFavoritedAnimation.emit({
          favorited: false,
          });
          return;

      })
  }

}
