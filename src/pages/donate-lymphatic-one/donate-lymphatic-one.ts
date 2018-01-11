import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import {BladderPage} from '../bladder/bladder';
import {NgModule} from '@angular/core';
import {InAppBrowser} from 'ionic-native';
import {LymphaticPage} from '../lymphatic/lymphatic';

/*
  Generated class for the DonateLymphaticOne page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-donate-lymphatic-one',
  templateUrl: 'donate-lymphatic-one.html'
})

@NgModule({
  providers: [
    InAppBrowser
  ] 
})

export class DonateLymphaticOnePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public plt: Platform) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonateLymphaticOnePage');
  }

  openUrl(providedUrl, deviceType) {

        if (this.plt.is('ios')) {
          deviceType = "ios";
        }
        else if(this.plt.is('android')) {
          deviceType = "android";
        }
        this.platform.ready().then(() => {
          if(deviceType == "android")
          {
            let browser = new InAppBrowser(providedUrl,'_blank');
          }
          else if(deviceType == "ios")
          {
            let browser = new InAppBrowser(providedUrl,'_system');
          }
        });      
}  

  openLymphatic()
  {
    this.navCtrl.push(LymphaticPage);
  } 

}
