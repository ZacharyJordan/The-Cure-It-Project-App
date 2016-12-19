import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Slides} from 'ionic-angular';
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

   mySlideOptions = {
    direction: "vertical",
    pager:"true"
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BladderPage');
  }

}
