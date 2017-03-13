import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Chart} from 'ng2-chartjs2';
import {BoneAboutPage} from '../bone-about/bone-about';
import {BoneOsteosarcomasPage} from '../bone-osteosarcomas/bone-osteosarcomas';
import {BoneEwingPage} from '../bone-ewing/bone-ewing';
import {BoneChondrosarcomasPage} from '../bone-chondrosarcomas/bone-chondrosarcomas';
import {BoneProtonPage} from '../bone-proton/bone-proton';
import {BoneMyeloablativePage} from '../bone-myeloablative/bone-myeloablative';
import {DonateBoneOnePage} from '../donate-bone-one/donate-bone-one';
import {DonateBoneTwoPage} from '../donate-bone-two/donate-bone-two';
import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';
/*
  Generated class for the Bone page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bone',
  templateUrl: 'bone.html'
})
export class BonePage {
@ViewChild(Slides) slides: Slides;
labels: string[] = ["Ewing Tumors", "Chondrosarcomas", "Other", "Osteosarcomas"];
  defaultFontColor:'#fff';
  
  data: Chart.Dataset[] = [
    {
      label: 'Bladder Cancer',
      
      data: [34, 6, 4, 56],
      backgroundColor: [
        '#36a2eb',
        '#ff6384',
        "#ffc970",
        "#5ad3d2"
      ],
      borderColor: [
        '#ECF0F1',
        '#ECF0F1',
        '#ECF0F1',
        '#ECF0F1'
      ],
      borderWidth: 0
    }
  ];

  mySlideOptions = {
    direction: "vertical",
    pager:"true"
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BonePage');
  }

  goToType()
  {
    this.slides.slideTo(3, 600);
  }

  goToTreatment()
  {
    this.slides.slideTo(6, 600);
  }

  goToHelp()
  {
    this.slides.slideTo(8, 600);
  }

  expandAbout()
  {
    this.navCtrl.push(BoneAboutPage);
  }

  expandFirstDisease()
  {
    this.navCtrl.push(BoneOsteosarcomasPage);
  }

  expandSecondDisease()
  {
    this.navCtrl.push(BoneEwingPage);
  }

  expandThirdDisease()
  {
    this.navCtrl.push(BoneChondrosarcomasPage);
  }

  expandFirstTreatment()
  {
    this.navCtrl.push(BoneProtonPage);
  }

  expandSecondTreatment()
  {
    this.navCtrl.push(BoneMyeloablativePage);
  }
  
  expandFirstDonation()
  {
    this.navCtrl.push(DonateBoneOnePage);
  }

  expandSecondDonation()
  {
    this.navCtrl.push(DonateBoneTwoPage);
  }

}
