import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import {NgModule} from '@angular/core';
import {InAppBrowser} from 'ionic-native';
import {ThroatPage} from '../throat/throat';

/*
  Generated class for the DonateThroatTwo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-donate-throat-two',
  templateUrl: 'donate-throat-two.html'
})

@NgModule({
  providers: [
    InAppBrowser
  ]
})

export class DonateThroatTwoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public plt: Platform) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonateThroatTwoPage');
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

  openThroat()
  {
    this.navCtrl.push(ThroatPage);
  }

}
