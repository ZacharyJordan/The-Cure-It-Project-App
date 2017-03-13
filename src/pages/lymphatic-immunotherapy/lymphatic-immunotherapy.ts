import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the LymphaticImmunotherapy page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lymphatic-immunotherapy',
  templateUrl: 'lymphatic-immunotherapy.html'
})
export class LymphaticImmunotherapyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LymphaticImmunotherapyPage');
  }

}