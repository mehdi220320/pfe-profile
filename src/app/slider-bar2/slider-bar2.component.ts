import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-slider-bar2',
  templateUrl: './slider-bar2.component.html',
  styleUrls: ['./slider-bar2.component.css']
})
export class SliderBar2Component implements OnInit {
  currentSlide = 1;
  slideTo='#slide'+this.currentSlide;

  constructor() {}

  ngOnInit(): void {
    /*setInterval(() => {
      this.nextSlide();
      console.log("slide changed");
    }, 3000);*/
  }
  nextSlide() {
    if(this.currentSlide==3){
      this.currentSlide=1;
    }
    else {this.currentSlide++;}
    this.slideTo='#slide'+this.currentSlide;
  }

  prevSlide() {
    if(this.currentSlide==1){
      this.currentSlide=3;
    }
    else {this.currentSlide--;}
    this.slideTo='#slide'+this.currentSlide;
  }
 /* autoSlide():string{
    console.log("done");
    if(this.seconds%3==0){
      if(this.currentSlide==3){
        this.currentSlide=1;
      }
      else{this.currentSlide++;}
    }
    this.slideTo='#slide'+this.currentSlide;
    return this.slideTo;
  }*/
}
