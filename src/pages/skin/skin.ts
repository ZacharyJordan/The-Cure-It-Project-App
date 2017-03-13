import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Chart} from 'ng2-chartjs2';
import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';
import {DonateSkinOnePage} from '../donate-skin-one/donate-skin-one';
import {DonateSkinTwoPage} from '../donate-skin-two/donate-skin-two';
import {SkinAboutPage} from '../skin-about/skin-about';
import {SkinBasalPage} from '../skin-basal/skin-basal';
import {SkinDrugsPage} from '../skin-drugs/skin-drugs';
import {SkinMelanomaPage} from '../skin-melanoma/skin-melanoma';
import {SkinPreventionPage} from '../skin-prevention/skin-prevention';
import {SkinSquamousPage} from '../skin-squamous/skin-squamous';

/*
  Generated class for the Breast page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-skin',
  templateUrl: 'skin.html'
})
export class SkinPage {

  @ViewChild(Slides) slides: Slides;

labels: string[] = ["Less than 40", "Less than 50", "Between 50 and 60", "Above 65"];
  defaultFontColor:'#fff';
  
  data: Chart.Dataset[] = [
    {
      label: 'Bladder Cancer',
      
      data: [0.5,22,35.5,42],
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
    console.log('ionViewDidLoad BreastPage');
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
    this.navCtrl.push(SkinAboutPage);
  }

  expandFirstDisease()
  {
    this.navCtrl.push(SkinMelanomaPage);
  }

  expandSecondDisease()
  {
    this.navCtrl.push(SkinBasalPage);
  }

  expandThirdDisease()
  {
    this.navCtrl.push(SkinSquamousPage);
  }

  expandFirstTreatment()
  {
    this.navCtrl.push(SkinDrugsPage);
  }

  expandSecondTreatment()
  {
    this.navCtrl.push(SkinPreventionPage);
  }

  expandFirstDonation()
  {
    this.navCtrl.push(DonateSkinOnePage);
  }

  expandSecondDonation()
  {
    this.navCtrl.push(DonateSkinTwoPage);
  }
}
