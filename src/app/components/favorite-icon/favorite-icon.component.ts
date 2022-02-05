import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

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
  favoriteState = "favorited";
  public iconName = 'heart';
  @Input() productID;
  @Output() favoritedAnimation = new EventEmitter<Object>();
  @Output() unFavoritedAnimation = new EventEmitter<Object>();

  constructor() { }

  ngAfterViewInit(): void {
    // console.clear();
    // console.log(this.productID);
      
  }

  ngOnInit() {
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
    this.favoriteState = 'favorited';
    this.favoritedAnimation.emit({
      favorited: true,
      })
 }
  setFavoriteStateOff() {
    this.favoriteState = 'unfavorited';
    this.unFavoritedAnimation.emit({
      favorited: false,
      })
  }

}
