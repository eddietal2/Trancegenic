import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
            color: '#e4405f',
            opacity: '1',
            transform: 'scale(1)'

        })),

        transition('unfavorited <=> favorited', animate('100ms ease-out'))
    ])
  ]
})
export class FavoriteIconComponent implements OnInit {
  favoriteState;
  public iconName = 'heart';
  @Input() job;
  @Input() favoriteJobs;
  @Output() favoritedAnimation = new EventEmitter<Object>();
  @Output() unFavoritedAnimation = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {}


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
      msg: `${this.job} was favorited`
      })
 }
  setFavoriteStateOff() {
    this.favoriteState = 'unfavorited';
    this.unFavoritedAnimation.emit({
      favorited: false,
      msg: `${this.job} was unfavorited`
      })
  }

}
