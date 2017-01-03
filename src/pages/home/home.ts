//HOME PAGE
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BladderPage} from '../bladder/bladder';
import {BloodPage} from '../blood/blood';
import {BonePage} from '../bone/bone';
import {BrainPage} from '../brain/brain';
import {BreastPage} from '../breast/breast';
import {InformationPage} from '../information/information';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  bladderOpen()
  {
    this.navCtrl.push(BladderPage);
  }

  bloodOpen()
  {
    this.navCtrl.push(BloodPage);
  }

  boneOpen()
  {
    this.navCtrl.push(BonePage);
  }

  brainOpen()
  {
    this.navCtrl.push(BrainPage);
  }

  breastOpen()
  {
    this.navCtrl.push(BreastPage);
  }

  informationOpen()
  {
    this.navCtrl.push(InformationPage);
  }

  

}
