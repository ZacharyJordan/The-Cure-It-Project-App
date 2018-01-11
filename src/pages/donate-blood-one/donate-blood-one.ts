import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import {NgModule} from '@angular/core';
import {InAppBrowser} from 'ionic-native';
import {BloodPage} from '../blood/blood';


/*
  Generated class for the DonateBloodOne page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-donate-blood-one',
  templateUrl: 'donate-blood-one.html'
})

@NgModule({
  providers: [
    InAppBrowser
  ]
})
export class DonateBloodOnePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public plt: Platform) {}

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonateBloodOnePage');
  }

  openBlood()
  {
    this.navCtrl.push(BloodPage);
  }

}
