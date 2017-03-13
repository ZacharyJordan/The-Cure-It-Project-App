import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {AccountCreationPage} from '../pages/account-creation/account-creation';
import { TabsPage } from '../pages/tabs/tabs';
import {SplashScreenPage} from '../pages/splash-screen/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

    //rootPage = SplashScreenPage;
    //rootPage = AppIntroPage;
    rootPage = TabsPage;
  
  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
