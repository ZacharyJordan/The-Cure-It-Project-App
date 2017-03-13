import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BladderPage} from '../bladder/bladder';
import {BloodPage} from '../blood/blood';
import {BonePage} from '../bone/bone';
import {BrainPage} from '../brain/brain';
import {BreastPage} from '../breast/breast';
import {InformationPage} from '../information/information';
import {ColorectalPage} from '../colorectal/colorectal';
import {EndometrialPage} from '../endometrial/endometrial';
import {EyePage} from '../eye/eye';
import {LiverPage} from '../liver/liver';
import {LymphaticPage} from '../lymphatic/lymphatic';
import {OralPage} from '../oral/oral';
import {OvarianPage} from '../ovarian/ovarian';
import {LungPage} from '../lung/lung';
import {PancreaticPage} from '../pancreatic/pancreatic';
import {SkinPage} from '../skin/skin';
import {TesticularPage} from '../testicular/testicular';
import {ThroatPage} from '../throat/throat';
import {ThyroidPage} from '../thyroid/thyroid';

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

  colorectalOpen()
  {
    this.navCtrl.push(ColorectalPage);
  }

  informationOpen()
  {
    this.navCtrl.push(InformationPage);
  }

  endometrialOpen()
  {
    this.navCtrl.push(EndometrialPage);
  }

  eyeOpen()
  {
    this.navCtrl.push(EyePage);
  }

  liverOpen()
  {
    this.navCtrl.push(LiverPage);
  }

  lymphaticOpen()
  {
    this.navCtrl.push(LymphaticPage);
  }

  oralOpen()
  {
    this.navCtrl.push(OralPage);
  }

  ovarianOpen()
  {
    this.navCtrl.push(OvarianPage);
  }

  lungOpen()
  {
    this.navCtrl.push(LungPage);
  }

  pancreaticOpen()
  {
    this.navCtrl.push(PancreaticPage);
  }

  skinOpen()
  {
    this.navCtrl.push(SkinPage);
  }

  testicularOpen()
  {
    this.navCtrl.push(TesticularPage);
  }

  throatOpen()
  {
    this.navCtrl.push(ThroatPage);
  }

  thyroidOpen()
  {
    this.navCtrl.push(ThyroidPage);
  }
  
}
