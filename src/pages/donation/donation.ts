import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {InformationPage} from '../information/information';

/*
  Generated class for the Donation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-donation',
  templateUrl: 'donation.html'
})
export class DonationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonationPage');
  }

  informationOpen()
  {
    this.navCtrl.push(InformationPage);
  }

}
