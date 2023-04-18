// https://codepen.io/H2xDev/pen/vYOOaaq
// https://codepen.io/H2xDev code by Radik

import { AfterViewInit, Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
})
export class ErrorPageComponent implements AfterViewInit {
  slides: NodeListOf<Element> = document.querySelectorAll('.slide');
  soundStartup: HTMLAudioElement = new Audio(
    'https://res.cloudinary.com/dlb3jof8w/video/upload/v1581412825/codepen/playstation_intro.mp3'
  );
  currentSlide = -1;
  playClicked = false;

  constructor(private location: Location) {}

  ngAfterViewInit() {
    this.slides = document.querySelectorAll('.slide');
    this.soundStartup = new Audio(
      'https://res.cloudinary.com/dlb3jof8w/video/upload/v1581412825/codepen/playstation_intro.mp3'
    );
    const playScene = document.querySelector('#play');
    playScene?.addEventListener('click', () => {
      this.startSlide();
      this.soundStartup.play();
      playScene?.parentNode?.removeChild(playScene);
    });
  }

  startSlide() {
    if (this.slides[this.currentSlide]) {
      this.slides[this.currentSlide].setAttribute('style', 'opacity: 0;');
    }
    this.currentSlide++;
    if (!this.slides[this.currentSlide]) return;
    const time = parseFloat(
      this.slides[this.currentSlide].getAttribute('data-time') || '0'
    );
    this.slides[this.currentSlide].setAttribute('style', 'display: block;');
    if (!time) return;
    setTimeout(() => {
      this.startSlide();
    }, time * 1000);
  }

  goBack(): void {
    this.location.back();
  }

  playClickSwitch() {
    this.playClicked = !this.playClicked;
  }
}
