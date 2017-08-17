import { Component } from '@angular/core';

import {InformationPage} from '../information/information';
import {NgModule} from '@angular/core';
import {InAppBrowser} from 'ionic-native';
import { NavController, NavParams, Platform } from 'ionic-angular';
import {DonationPage} from '../donation/donation';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

@NgModule({


  providers: [
 
    InAppBrowser
  
  ]
 
})


export class ContactPage {

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

  openDonationPage()
  {
    this.navCtrl.push(DonationPage);
  }  

  informationOpen()
  {
    this.navCtrl.push(InformationPage);
  }
  

}
