import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DonateBrainTwoPage} from '../donate-brain-two/donate-brain-two';

/*
  Generated class for the BrainViruses page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-brain-viruses',
  templateUrl: 'brain-viruses.html'
})
export class BrainVirusesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrainVirusesPage');
  }

  donateBladder()
  {
    this.navCtrl.push(DonateBrainTwoPage);
  }

}
