import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonatePancreaticTwoPage} from '../donate-pancreatic-two/donate-pancreatic-two';
/*
  Generated class for the PancreaticPallative page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pancreatic-pallative',
  templateUrl: 'pancreatic-pallative.html'
})
export class PancreaticPallativePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PancreaticPallativePage');
  }

  donateSkin()
  { 
    this.navCtrl.push(DonatePancreaticTwoPage);
  }
}
