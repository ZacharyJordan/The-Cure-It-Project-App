import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Slides} from 'ionic-angular';
import { ViewChild } from '@angular/core';
import {BladderAboutPage} from '../bladder-about/bladder-about';
/*
  Generated class for the Bladder page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bladder',
  templateUrl: 'bladder.html'
})
export class BladderPage {
  @ViewChild('mySlider') slider: Slides;

  aboutDisease()
  {
    console.log("t");
    this.slider.slideTo(1);
  }

  expandAbout()
  {
    this.navCtrl.push(BladderAboutPage);
  }

   mySlideOptions = {
    direction: "vertical",
    pager:"true"
  };

    constructor(public navCtrl: NavController, public navParams: NavParams) {}

    ionViewDidLoad() {
      console.log('ionViewDidLoad BladderPage');
    }

}

