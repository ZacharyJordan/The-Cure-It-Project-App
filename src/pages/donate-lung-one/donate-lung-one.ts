import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import {NgModule} from '@angular/core';
import {InAppBrowser} from 'ionic-native';
import {LungPage} from '../lung/lung';

/*
  Generated class for the DonateLungOne page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-donate-lung-one',
  templateUrl: 'donate-lung-one.html'
})

@NgModule({
  providers: [
    InAppBrowser
  ]
})

export class DonateLungOnePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public plt: Platform) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonateLungOnePage');
  }

  openUrl(providedUrl, deviceType) {
    console.log("wtf");
        if (this.plt.is('ios')) {
          deviceType = "ios";
        }
        else if(this.plt.is('android')) {
          console.log("android");
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

  openLung()
  {
    this.navCtrl.push(LungPage);
  }

}
