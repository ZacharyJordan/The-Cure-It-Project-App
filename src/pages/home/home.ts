//HOME PAGE
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BladderPage} from '../bladder/bladder';

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

}
