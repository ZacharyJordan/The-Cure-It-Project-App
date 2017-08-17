import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateSkinOnePage} from '../donate-skin-one/donate-skin-one';
/*
  Generated class for the SkinDrugs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-skin-drugs',
  templateUrl: 'skin-drugs.html'
})
export class SkinDrugsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkinDrugsPage');
  }
  
  donateSkin()
  {
    this.navCtrl.push(DonateSkinOnePage);
  }

}
