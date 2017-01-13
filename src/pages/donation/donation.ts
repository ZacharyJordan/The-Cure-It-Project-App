import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {InformationPage} from '../information/information';
import {DonateBladderOnePage} from '../donate-bladder-one/donate-bladder-one';
import {DonateBladderTwoPage} from '../donate-bladder-two/donate-bladder-two';
import {DonateBloodOnePage} from '../donate-blood-one/donate-blood-one';
import {DonateBloodTwoPage} from '../donate-blood-two/donate-blood-two';
import {DonateBrainOnePage} from '../donate-brain-one/donate-brain-one';
import {DonateBrainTwoPage} from '../donate-brain-two/donate-brain-two';
import {DonateBoneOnePage} from '../donate-bone-one/donate-bone-one';
import {DonateBoneTwoPage} from '../donate-bone-two/donate-bone-two';

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

  bladderFirst()
  {
    this.navCtrl.push(DonateBladderOnePage);
  }
  
  bladderSecond()
  {
    this.navCtrl.push(DonateBladderTwoPage);
  }

  bloodFirst()
  {
    this.navCtrl.push(DonateBloodOnePage);
  }

  bloodSecond()
  {
    this.navCtrl.push(DonateBloodTwoPage);
  }

  brainFirst()
  {
    this.navCtrl.push(DonateBrainOnePage);
  }

  brainSecond()
  {
    this.navCtrl.push(DonateBrainTwoPage);
  }

  boneFirst()
  {
    this.navCtrl.push(DonateBoneOnePage);
  }

  boneSecond()
  {
    this.navCtrl.push(DonateBoneTwoPage);
  }

}
