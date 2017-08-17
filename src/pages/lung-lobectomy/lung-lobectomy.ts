import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateLungOnePage} from '../donate-lung-one/donate-lung-one';
/*
  Generated class for the LungLobectomy page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lung-lobectomy',
  templateUrl: 'lung-lobectomy.html'
})
export class LungLobectomyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LungLobectomyPage');
  }

  donateThroat()
  {
    this.navCtrl.push(DonateLungOnePage);
  }

}
