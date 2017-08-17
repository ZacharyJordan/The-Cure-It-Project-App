import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import {InformationPage} from '../information/information';
import {DonateBladderOnePage} from '../donate-bladder-one/donate-bladder-one';
import {DonateBladderTwoPage} from '../donate-bladder-two/donate-bladder-two';
import {DonateBloodOnePage} from '../donate-blood-one/donate-blood-one';
import {DonateBloodTwoPage} from '../donate-blood-two/donate-blood-two';
import {DonateBrainOnePage} from '../donate-brain-one/donate-brain-one';
import {DonateBrainTwoPage} from '../donate-brain-two/donate-brain-two';
import {DonateBoneOnePage} from '../donate-bone-one/donate-bone-one';
import {DonateBoneTwoPage} from '../donate-bone-two/donate-bone-two';
import {DonateBreastOnePage} from '../donate-breast-one/donate-breast-one';
import {DonateBreastTwoPage} from '../donate-breast-two/donate-breast-two';
import {DonateColorectalOnePage} from '../donate-colorectal-one/donate-colorectal-one';
import {DonateColorectalTwoPage} from '../donate-colorectal-two/donate-colorectal-two';
import {DonateEndometrialOnePage} from '../donate-endometrial-one/donate-endometrial-one';
import {DonateEndometrialTwoPage} from '../donate-endometrial-two/donate-endometrial-two';
import {DonateEyeOnePage} from '../donate-eye-one/donate-eye-one';
import {DonateEyeTwoPage} from '../donate-eye-two/donate-eye-two';
import {DonateLiverOnePage} from '../donate-liver-one/donate-liver-one';
import {DonateLiverTwoPage} from '../donate-liver-two/donate-liver-two';
import {DonateLungOnePage} from '../donate-lung-one/donate-lung-one';
import {DonateLungTwoPage} from '../donate-lung-two/donate-lung-two';
import {DonateLymphaticOnePage} from '../donate-lymphatic-one/donate-lymphatic-one';
import {DonateLymphaticTwoPage} from '../donate-lymphatic-two/donate-lymphatic-two';
import {DonateOralOnePage} from '../donate-oral-one/donate-oral-one';
import {DonateOralTwoPage} from '../donate-oral-two/donate-oral-two';
import {DonateOvarianOnePage} from '../donate-ovarian-one/donate-ovarian-one';
import {DonateOvarianTwoPage} from '../donate-ovarian-two/donate-ovarian-two';
import {DonatePancreaticOnePage} from '../donate-pancreatic-one/donate-pancreatic-one';
import {DonatePancreaticTwoPage} from '../donate-pancreatic-two/donate-pancreatic-two';
import {DonateSkinOnePage} from '../donate-skin-one/donate-skin-one';
import {DonateSkinTwoPage} from '../donate-skin-two/donate-skin-two';
import {DonateTesticularOnePage} from '../donate-testicular-one/donate-testicular-one';
import {DonateTesticularTwoPage} from '../donate-testicular-two/donate-testicular-two';
import {DonateThroatOnePage} from '../donate-throat-one/donate-throat-one';
import {DonateThroatTwoPage} from '../donate-throat-two/donate-throat-two';
import {DonateThyroidOnePage} from '../donate-thyroid-one/donate-thyroid-one';
import {DonateThyroidTwoPage} from '../donate-thyroid-two/donate-thyroid-two';
import {NgModule} from '@angular/core';
import {InAppBrowser} from 'ionic-native';

/*
  Generated class for the Donation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-donation',
  templateUrl: 'donation.html'
})

@NgModule({


  providers: [
 
    InAppBrowser
  
  ]
 
})


export class DonationPage {


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
    console.log('ionViewDidLoad DonationPage');
  }

  informationOpen()
  {
    this.navCtrl.push(InformationPage);
  }

  bladderFirst()
  {
    this.navCtrl.push(DonateBladderOnePage);
  }
  
  bladderSecond()
  {
    this.navCtrl.push(DonateBladderTwoPage);
  }

  bloodFirst()
  {
    this.navCtrl.push(DonateBloodOnePage);
  }

  bloodSecond()
  {
    this.navCtrl.push(DonateBloodTwoPage);
  }

  brainFirst()
  {
    this.navCtrl.push(DonateBrainOnePage);
  }

  brainSecond()
  {
    this.navCtrl.push(DonateBrainTwoPage);
  }

  boneFirst()
  {
    this.navCtrl.push(DonateBoneOnePage);
  }

  boneSecond()
  {
    this.navCtrl.push(DonateBoneTwoPage);
  }

  breastFirst()
  {
    this.navCtrl.push(DonateBreastOnePage);
  }

  breastSecond()
  {
    this.navCtrl.push(DonateBreastTwoPage);
  }

  colorectalFirst()
  {
    this.navCtrl.push(DonateColorectalOnePage);
  }

  colorectalSecond()
  {
    this.navCtrl.push(DonateColorectalTwoPage);
  }

  endometrialFirst()
  {
    this.navCtrl.push(DonateEndometrialOnePage);
  }

  endometrialSecond()
  {
    this.navCtrl.push(DonateEndometrialTwoPage);
  }

  eyeFirst()
  {
    this.navCtrl.push(DonateEyeOnePage);
  }

  eyeSecond()
  {
    this.navCtrl.push(DonateEyeTwoPage);
  }

  liverFirst()
  {
    this.navCtrl.push(DonateLiverOnePage);
  }

  liverSecond()
  {
    this.navCtrl.push(DonateLiverTwoPage);
  }

  lungFirst()
  {
    this.navCtrl.push(DonateLungOnePage);
  }

  lungSecond()
  {
    this.navCtrl.push(DonateLungTwoPage);
  }

  lymphaticFirst()
  {
    this.navCtrl.push(DonateLymphaticOnePage);
  }

  lymphaticSecond()
  {
    this.navCtrl.push(DonateLymphaticTwoPage);
  }

  oralFirst()
  {
    this.navCtrl.push(DonateOralOnePage);
  }

  oralSecond()
  {
    this.navCtrl.push(DonateOralTwoPage);
  }

  ovarianFirst()
  {
    this.navCtrl.push(DonateOvarianOnePage);
  }

  ovarianSecond()
  {
    this.navCtrl.push(DonateOvarianTwoPage);
  }

  pancreaticFirst()
  {
    this.navCtrl.push(DonatePancreaticOnePage);
  }

  pancreaticSecond()
  {
    this.navCtrl.push(DonatePancreaticTwoPage);
  }

  skinFirst()
  {
    this.navCtrl.push(DonateSkinOnePage);
  }

  skinSecond()
  {
    this.navCtrl.push(DonateSkinTwoPage);
  }

  testicularFirst()
  {
    this.navCtrl.push(DonateTesticularOnePage);
  }

  testicularSecond()
  {
    this.navCtrl.push(DonateTesticularTwoPage);
  }

  throatFirst()
  {
    this.navCtrl.push(DonateThroatOnePage);
  }

  throatSecond()
  {
    this.navCtrl.push(DonateThroatTwoPage);
  }

  thyroidFirst()
  {
    this.navCtrl.push(DonateThyroidOnePage);
  }

  thyroidSecond()
  {
    this.navCtrl.push(DonateThyroidTwoPage);
  }
}
