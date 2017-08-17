import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateOralTwoPage} from '../donate-oral-two/donate-oral-two';
/*
  Generated class for the OralLifestyle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-oral-lifestyle',
  templateUrl: 'oral-lifestyle.html'
})
export class OralLifestylePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OralLifestylePage');
  }

  donateSkin()
  {
    this.navCtrl.push(DonateOralTwoPage);
  }

}
