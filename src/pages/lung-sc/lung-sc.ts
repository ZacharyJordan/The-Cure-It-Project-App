import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateLungOnePage} from '../donate-lung-one/donate-lung-one';
/*
  Generated class for the LungSc page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lung-sc',
  templateUrl: 'lung-sc.html'
})
export class LungScPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LungScPage');
  }

  donateTesticular()
  {
    this.navCtrl.push(DonateLungOnePage);
  }

}
