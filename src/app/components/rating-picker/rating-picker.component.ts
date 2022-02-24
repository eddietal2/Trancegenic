import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-rating-picker',
  templateUrl: './rating-picker.component.html',
  styleUrls: ['./rating-picker.component.scss'],
})
export class RatingPickerComponent implements OnInit {

  starColor = '#FED600';
  starColorWhite = '#FFF';
  @Output() sendRating = new EventEmitter<number>()
  rating = 0;

  constructor() { }

  ngOnInit() {
    this.sendRating.asObservable().subscribe(
      data => {
        this.rating = data;
      }
    )}

 @HostListener('unloaded')
    ngOnDestroy() {
      this.sendRating.unsubscribe();
    }

  /**
   * Rating - 0.5
   */
  zeroPointFiveFill() {
    console.log('Rating - 0.5');
    this.sendRating.emit(0.5);

    
    // Select
    let zeroPointFiveFillPath = document.getElementById('zeroPointFiveFillPath');

    zeroPointFiveFillPath.style.fill = this.starColor;

    // Unselect
    let oneFillPath = document.getElementById('oneFillPath');
    let onePointFiveFillPath = document.getElementById('onePointFiveFillPath');
    let twoFillPath = document.getElementById('twoFillPath');
    let twoPointFiveFillPath = document.getElementById('twoPointFiveFillPath');
    let threeFillPath = document.getElementById('threeFillPath');
    let threePointFiveFillPath = document.getElementById('threePointFiveFillPath');
    let fourFillPath = document.getElementById('fourFillPath');
    let fourPointFiveFillPath = document.getElementById('fourPointFiveFillPath');
    let fiveFillPath = document.getElementById('fiveFillPath');
    let starOneWrapper = document.getElementById('star-outline-1');

    onePointFiveFillPath.style.fill = this.starColorWhite;
    oneFillPath.style.fill = this.starColorWhite;
    twoPointFiveFillPath.style.fill = this.starColorWhite;
    twoFillPath.style.fill = this.starColorWhite;
    threePointFiveFillPath.style.fill = this.starColorWhite;
    threeFillPath.style.fill = this.starColorWhite;
    fourPointFiveFillPath.style.fill = this.starColorWhite;
    fourFillPath.style.fill = this.starColorWhite;
    fiveFillPath.style.fill = this.starColorWhite;

    // Make Star Larger Animation
    starOneWrapper.style.transform = 'scale(1.3)';

    setTimeout(() => {
      starOneWrapper.style.transform = 'scale(1)';
      
    }, 300);


  }

  /**
   * Rating - 1
   */
  oneFill() {
    console.log('Rating - 1');
    this.sendRating.emit(1);

    // Select
    let zeroPointFiveFill = document.getElementById('zeroPointFiveFillPath');
    let oneFillPath = document.getElementById('oneFillPath');
    let starOneWrapper = document.getElementById('star-outline-1');

    zeroPointFiveFill.style.fill = this.starColor;
    oneFillPath.style.fill = this.starColor;

    // Unselect
    let onePointFiveFillPath = document.getElementById('onePointFiveFillPath');
    let twoFillPath = document.getElementById('twoFillPath');
    let twoPointFiveFillPath = document.getElementById('twoPointFiveFillPath');
    let threeFillPath = document.getElementById('threeFillPath');
    let threePointFiveFillPath = document.getElementById('threePointFiveFillPath');
    let fourFillPath = document.getElementById('fourFillPath');
    let fourPointFiveFillPath = document.getElementById('fourPointFiveFillPath');
    let fiveFillPath = document.getElementById('fiveFillPath');

    onePointFiveFillPath.style.fill = this.starColorWhite;
    twoPointFiveFillPath.style.fill = this.starColorWhite;
    twoFillPath.style.fill = this.starColorWhite;
    threePointFiveFillPath.style.fill = this.starColorWhite;
    threeFillPath.style.fill = this.starColorWhite;
    fourPointFiveFillPath.style.fill = this.starColorWhite;
    fourFillPath.style.fill = this.starColorWhite;
    fiveFillPath.style.fill = this.starColorWhite;

    // Make Star Larger Animation
    starOneWrapper.style.transform = 'scale(1.3)';

    setTimeout(() => {
      starOneWrapper.style.transform = 'scale(1)';
      
    }, 300);

  }

  /**
   * Rating - 1.5
   */
  onePointFiveFill() {
    console.log('Rating - 1.5');
    this.sendRating.emit(1.5);

    // Select
    let zeroPointFiveFill = document.getElementById('zeroPointFiveFillPath');
    let oneFillPath = document.getElementById('oneFillPath');
    let onePointFiveFillPath = document.getElementById('onePointFiveFillPath');
    let starOneWrapper = document.getElementById('star-outline-2');

    zeroPointFiveFill.style.fill = this.starColor;
    onePointFiveFillPath.style.fill = this.starColor;
    oneFillPath.style.fill = this.starColor;

    // Unselect
    let twoFillPath = document.getElementById('twoFillPath');
    let twoPointFiveFillPath = document.getElementById('twoPointFiveFillPath');
    let threeFillPath = document.getElementById('threeFillPath');
    let threePointFiveFillPath = document.getElementById('threePointFiveFillPath');
    let fourFillPath = document.getElementById('fourFillPath');
    let fourPointFiveFillPath = document.getElementById('fourPointFiveFillPath');
    let fiveFillPath = document.getElementById('fiveFillPath');

    twoPointFiveFillPath.style.fill = this.starColorWhite;
    twoFillPath.style.fill = this.starColorWhite;
    threePointFiveFillPath.style.fill = this.starColorWhite;
    threeFillPath.style.fill = this.starColorWhite;
    fourPointFiveFillPath.style.fill = this.starColorWhite;
    fourFillPath.style.fill = this.starColorWhite;
    fiveFillPath.style.fill = this.starColorWhite;

    // Make Star Larger Animation
    starOneWrapper.style.transform = 'scale(1.3)';

    setTimeout(() => {
      starOneWrapper.style.transform = 'scale(1)';
      
    }, 300);
  }

  /**
   * Rating - 2
   */
  twoFill() {
    console.log('Rating - 2');
    this.sendRating.emit(2);

    // Select
    let zeroPointFiveFill = document.getElementById('zeroPointFiveFillPath');
    let oneFillPath = document.getElementById('oneFillPath');
    let onePointFiveFillPath = document.getElementById('onePointFiveFillPath');
    let twoFillPath = document.getElementById('twoFillPath');
    let starTwoWrapper = document.getElementById('star-outline-2');

    zeroPointFiveFill.style.fill = this.starColor;
    onePointFiveFillPath.style.fill = this.starColor;
    oneFillPath.style.fill = this.starColor;
    twoFillPath.style.fill = this.starColor;

    // Unselect
    let twoPointFiveFillPath = document.getElementById('twoPointFiveFillPath');
    let threeFillPath = document.getElementById('threeFillPath');
    let threePointFiveFillPath = document.getElementById('threePointFiveFillPath');
    let fourFillPath = document.getElementById('fourFillPath');
    let fourPointFiveFillPath = document.getElementById('fourPointFiveFillPath');
    let fiveFillPath = document.getElementById('fiveFillPath');

    twoPointFiveFillPath.style.fill = this.starColorWhite;
    threePointFiveFillPath.style.fill = this.starColorWhite;
    threeFillPath.style.fill = this.starColorWhite;
    fourPointFiveFillPath.style.fill = this.starColorWhite;
    fourFillPath.style.fill = this.starColorWhite;
    fiveFillPath.style.fill = this.starColorWhite;

    // Make Star Larger Animation
    starTwoWrapper.style.transform = 'scale(1.3)';

    setTimeout(() => {
      starTwoWrapper.style.transform = 'scale(1)';
      
    }, 300);
  }

  /**
   * Rating - 2.5
   */
  twoPointFiveFill() {
    console.log('Rating - 2.5');
    this.sendRating.emit(2.5);

    // Select
    let zeroPointFiveFill = document.getElementById('zeroPointFiveFillPath');
    let oneFillPath = document.getElementById('oneFillPath');
    let onePointFiveFillPath = document.getElementById('onePointFiveFillPath');
    let twoFillPath = document.getElementById('twoFillPath');
    let twoPointFiveFillPath = document.getElementById('twoPointFiveFillPath');
    let starTwoWrapper = document.getElementById('star-outline-3');

    zeroPointFiveFill.style.fill = this.starColor;
    onePointFiveFillPath.style.fill = this.starColor;
    oneFillPath.style.fill = this.starColor;
    twoPointFiveFillPath.style.fill = this.starColor;
    twoFillPath.style.fill = this.starColor;

    // Unselect
    let threeFillPath = document.getElementById('threeFillPath');
    let threePointFiveFillPath = document.getElementById('threePointFiveFillPath');
    let fourFillPath = document.getElementById('fourFillPath');
    let fourPointFiveFillPath = document.getElementById('fourPointFiveFillPath');
    let fiveFillPath = document.getElementById('fiveFillPath');

    threePointFiveFillPath.style.fill = this.starColorWhite;
    threeFillPath.style.fill = this.starColorWhite;
    fourPointFiveFillPath.style.fill = this.starColorWhite;
    fourFillPath.style.fill = this.starColorWhite;
    fiveFillPath.style.fill = this.starColorWhite;

    // Make Star Larger Animation
    starTwoWrapper.style.transform = 'scale(1.3)';

    setTimeout(() => {
      starTwoWrapper.style.transform = 'scale(1)';
      
    }, 300);
  }

  /**
   * Rating - 3
   */
  threeFill() {
    console.log('Rating - 3');
    this.sendRating.emit(3);

    // Select
    let zeroPointFiveFill = document.getElementById('zeroPointFiveFillPath');
    let oneFillPath = document.getElementById('oneFillPath');
    let onePointFiveFillPath = document.getElementById('onePointFiveFillPath');
    let twoFillPath = document.getElementById('twoFillPath');
    let twoPointFiveFillPath = document.getElementById('twoPointFiveFillPath');
    let threeFillPath = document.getElementById('threeFillPath');
    let starThreeWrapper = document.getElementById('star-outline-3');

    zeroPointFiveFill.style.fill = this.starColor;
    onePointFiveFillPath.style.fill = this.starColor;
    oneFillPath.style.fill = this.starColor;
    twoPointFiveFillPath.style.fill = this.starColor;
    twoFillPath.style.fill = this.starColor;
    threeFillPath.style.fill = this.starColor;

    // Unselect
    let threePointFiveFillPath = document.getElementById('threePointFiveFillPath');
    let fourFillPath = document.getElementById('fourFillPath');
    let fourPointFiveFillPath = document.getElementById('fourPointFiveFillPath');
    let fiveFillPath = document.getElementById('fiveFillPath');

    threePointFiveFillPath.style.fill = this.starColorWhite;
    fourPointFiveFillPath.style.fill = this.starColorWhite;
    fourFillPath.style.fill = this.starColorWhite;
    fiveFillPath.style.fill = this.starColorWhite;

    // Make Star Larger Animation
    starThreeWrapper.style.transform = 'scale(1.3)';

    setTimeout(() => {
      starThreeWrapper.style.transform = 'scale(1)';
      
    }, 300);
  }

  /**
   * Rating - 3.5
   */
  threePointFiveFill() {
    console.log('Rating - 3.5');
    this.sendRating.emit(3.5);


    // Select
    let zeroPointFiveFill = document.getElementById('zeroPointFiveFillPath');
    let oneFillPath = document.getElementById('oneFillPath');
    let onePointFiveFillPath = document.getElementById('onePointFiveFillPath');
    let twoFillPath = document.getElementById('twoFillPath');
    let twoPointFiveFillPath = document.getElementById('twoPointFiveFillPath');
    let threeFillPath = document.getElementById('threeFillPath');
    let threePointFiveFillPath = document.getElementById('threePointFiveFillPath');
    let starThreeWrapper = document.getElementById('star-outline-4');

    zeroPointFiveFill.style.fill = this.starColor;
    onePointFiveFillPath.style.fill = this.starColor;
    oneFillPath.style.fill = this.starColor;
    twoPointFiveFillPath.style.fill = this.starColor;
    twoFillPath.style.fill = this.starColor;
    threePointFiveFillPath.style.fill = this.starColor;
    threeFillPath.style.fill = this.starColor;

    // Unselect
    let fourFillPath = document.getElementById('fourFillPath');
    let fourPointFiveFillPath = document.getElementById('fourPointFiveFillPath');
    let fiveFillPath = document.getElementById('fiveFillPath');

    fourPointFiveFillPath.style.fill = this.starColorWhite;
    fourFillPath.style.fill = this.starColorWhite;
    fiveFillPath.style.fill = this.starColorWhite;

    // Make Star Larger Animation
    starThreeWrapper.style.transform = 'scale(1.3)';

    setTimeout(() => {
      starThreeWrapper.style.transform = 'scale(1)';
      
    }, 300);
  }

  /**
   * Rating - 4
   */
  fourFill() {
    console.log('Rating - 4');
    this.sendRating.emit(4);


    // Select
    let zeroPointFiveFill = document.getElementById('zeroPointFiveFillPath');
    let oneFillPath = document.getElementById('oneFillPath');
    let onePointFiveFillPath = document.getElementById('onePointFiveFillPath');
    let twoFillPath = document.getElementById('twoFillPath');
    let twoPointFiveFillPath = document.getElementById('twoPointFiveFillPath');
    let threeFillPath = document.getElementById('threeFillPath');
    let threePointFiveFillPath = document.getElementById('threePointFiveFillPath');
    let fourFillPath = document.getElementById('fourFillPath');
    let starFourWrapper = document.getElementById('star-outline-4');

    zeroPointFiveFill.style.fill = this.starColor;
    onePointFiveFillPath.style.fill = this.starColor;
    oneFillPath.style.fill = this.starColor;
    twoPointFiveFillPath.style.fill = this.starColor;
    twoFillPath.style.fill = this.starColor;
    threePointFiveFillPath.style.fill = this.starColor;
    threeFillPath.style.fill = this.starColor;
    fourFillPath.style.fill = this.starColor;

    // Unselect
    let fourPointFiveFillPath = document.getElementById('fourPointFiveFillPath');
    let fiveFillPath = document.getElementById('fiveFillPath');

    fourPointFiveFillPath.style.fill = this.starColorWhite;
    fiveFillPath.style.fill = this.starColorWhite;

    // Make Star Larger Animation
    starFourWrapper.style.transform = 'scale(1.3)';

    setTimeout(() => {
      starFourWrapper.style.transform = 'scale(1)';
      
    }, 300);
  }

  /**
   * Rating - 4.5
   */
  fourPointFiveFill() {
    console.log('Rating - 4.5');
    this.sendRating.emit(4.5);


    // Select
    let zeroPointFiveFill = document.getElementById('zeroPointFiveFillPath');
    let oneFillPath = document.getElementById('oneFillPath');
    let onePointFiveFillPath = document.getElementById('onePointFiveFillPath');
    let twoFillPath = document.getElementById('twoFillPath');
    let twoPointFiveFillPath = document.getElementById('twoPointFiveFillPath');
    let threeFillPath = document.getElementById('threeFillPath');
    let threePointFiveFillPath = document.getElementById('threePointFiveFillPath');
    let fourFillPath = document.getElementById('fourFillPath');
    let fourPointFiveFillPath = document.getElementById('fourPointFiveFillPath');
    let starFiveWrapper = document.getElementById('star-outline-5');

    zeroPointFiveFill.style.fill = this.starColor;
    onePointFiveFillPath.style.fill = this.starColor;
    oneFillPath.style.fill = this.starColor;
    twoPointFiveFillPath.style.fill = this.starColor;
    twoFillPath.style.fill = this.starColor;
    threePointFiveFillPath.style.fill = this.starColor;
    threeFillPath.style.fill = this.starColor;
    fourPointFiveFillPath.style.fill = this.starColor;
    fourFillPath.style.fill = this.starColor;

    // Unselect
    let fiveFillPath = document.getElementById('fiveFillPath');

    fiveFillPath.style.fill = this.starColorWhite;

    // Make Star Larger Animation
    starFiveWrapper.style.transform = 'scale(1.3)';

    setTimeout(() => {
      starFiveWrapper.style.transform = 'scale(1)';
      
    }, 300);
  }

  /**
   * Rating - 5
   */
  fiveFill() {
    console.log('Rating - 5');
    this.sendRating.emit(5);


    // Select
    let zeroPointFiveFill = document.getElementById('zeroPointFiveFillPath');
    let oneFillPath = document.getElementById('oneFillPath');
    let onePointFiveFillPath = document.getElementById('onePointFiveFillPath');
    let twoFillPath = document.getElementById('twoFillPath');
    let twoPointFiveFillPath = document.getElementById('twoPointFiveFillPath');
    let threeFillPath = document.getElementById('threeFillPath');
    let threePointFiveFillPath = document.getElementById('threePointFiveFillPath');
    let fourFillPath = document.getElementById('fourFillPath');
    let fourPointFiveFillPath = document.getElementById('fourPointFiveFillPath');
    let fiveFillPath = document.getElementById('fiveFillPath');
    let starFiveWrapper = document.getElementById('star-outline-5');

    zeroPointFiveFill.style.fill = this.starColor;
    onePointFiveFillPath.style.fill = this.starColor;
    oneFillPath.style.fill = this.starColor;
    twoPointFiveFillPath.style.fill = this.starColor;
    twoFillPath.style.fill = this.starColor;
    threePointFiveFillPath.style.fill = this.starColor;
    threeFillPath.style.fill = this.starColor;
    fourPointFiveFillPath.style.fill = this.starColor;
    fourFillPath.style.fill = this.starColor;
    fiveFillPath.style.fill = this.starColor;

    // Make Star Larger Animation
    starFiveWrapper.style.transform = 'scale(1.3)';

    setTimeout(() => {
      starFiveWrapper.style.transform = 'scale(1)';
      
    }, 300);

    // Unselect
    // None
  }
}
