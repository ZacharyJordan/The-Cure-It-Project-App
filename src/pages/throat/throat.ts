import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Chart} from 'ng2-chartjs2';
import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';
import {ThroatAboutPage} from '../throat-about/throat-about';
import {ThroatHypoPage} from '../throat-hypo/throat-hypo';
import {ThroatLarynPage} from '../throat-laryn/throat-laryn';
import {ThroatLaryngealPage} from '../throat-laryngeal/throat-laryngeal';
import {ThroatRadiationPage} from '../throat-radiation/throat-radiation';
import {DonateThroatOnePage} from '../donate-throat-one/donate-throat-one';
import {DonateThroatTwoPage} from '../donate-throat-two/donate-throat-two';


/*
  Generated class for the Breast page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-throat',
  templateUrl: 'throat.html'
})
export class ThroatPage {

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
    this.slides.slideTo(5, 600);
  }

  goToHelp()
  {
    this.slides.slideTo(7, 600);
  }

  expandAbout()
  {
    this.navCtrl.push(ThroatAboutPage);
  }

  expandFirstDisease()
  {
    this.navCtrl.push(ThroatLarynPage);
  }

  expandSecondDisease()
  {
    this.navCtrl.push(ThroatHypoPage)
  }

  expandFirstTreatment()
  {
    this.navCtrl.push(ThroatLaryngealPage);
  }

  expandSecondTreatment()
  {
    this.navCtrl.push(ThroatRadiationPage);
  }

  expandFirstDonation()
  {
    this.navCtrl.push(DonateThroatOnePage);
  }

  expandSecondDonation()
  {
    this.navCtrl.push(DonateThroatTwoPage);
  }
  
}
