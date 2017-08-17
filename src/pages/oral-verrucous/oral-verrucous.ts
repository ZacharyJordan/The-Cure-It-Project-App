import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateOralOnePage} from '../donate-oral-one/donate-oral-one';
/*
  Generated class for the OralVerrucous page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-oral-verrucous',
  templateUrl: 'oral-verrucous.html'
})
export class OralVerrucousPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OralVerrucousPage');
  }

  donateTesticular()
  {
    this.navCtrl.push(DonateOralOnePage);
  }

}
