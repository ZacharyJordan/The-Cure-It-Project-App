import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateBrainOnePage} from '../donate-brain-one/donate-brain-one';

/*
  Generated class for the BrainGlioblastomas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-brain-glioblastomas',
  templateUrl: 'brain-glioblastomas.html'
})
export class BrainGlioblastomasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrainGlioblastomasPage');
  }
  
  donateBladder()
  {
    this.navCtrl.push(DonateBrainOnePage);
  }

}
