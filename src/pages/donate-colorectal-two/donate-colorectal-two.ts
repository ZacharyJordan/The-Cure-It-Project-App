import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import {NgModule} from '@angular/core';
import {InAppBrowser} from 'ionic-native';
import {ColorectalPage} from '../colorectal/colorectal';

/*
  Generated class for the DonateColorectalTwo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-donate-colorectal-two',
  templateUrl: 'donate-colorectal-two.html'
})

@NgModule({
  providers: [
    InAppBrowser
  ]
})

export class DonateColorectalTwoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public plt: Platform) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonateColorectalTwoPage');
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

openColorectal()
{
  this.navCtrl.push(ColorectalPage);
}


}
