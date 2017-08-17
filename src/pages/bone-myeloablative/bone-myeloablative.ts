import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateBoneOnePage} from '../donate-bone-one/donate-bone-one';
/*
  Generated class for the BoneMyeloablative page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bone-myeloablative',
  templateUrl: 'bone-myeloablative.html'
})
export class BoneMyeloablativePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoneMyeloablativePage');
  }

  donateBladder()
  {
    this.navCtrl.push(DonateBoneOnePage);
  }
}
