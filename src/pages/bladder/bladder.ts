import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Slides} from 'ionic-angular';
import { ViewChild } from '@angular/core';
import {BladderAboutPage} from '../bladder-about/bladder-about';
import {Chart} from 'ng2-chartjs2';
import {BladderPhotodynamicPage} from '../bladder-photodynamic/bladder-photodynamic';
import {BladderIntravesicalPage} from '../bladder-intravesical/bladder-intravesical';
import {BladderTransitionalPage} from '../bladder-transitional/bladder-transitional';
import {BladderSquamousPage} from '../bladder-squamous/bladder-squamous';
import {DonateBladderOnePage} from '../donate-bladder-one/donate-bladder-one';
import {DonateBladderTwoPage} from '../donate-bladder-two/donate-bladder-two';

/*
  Generated class for the Bladder page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/


@Component({
  selector: 'page-bladder',
  templateUrl: 'bladder.html'
})
export class BladderPage {

@ViewChild(Slides) slides: Slides;

  labels: string[] = ["Females", "Males"];
  defaultFontColor:'#fff';
  
  data: Chart.Dataset[] = [
    {
      label: 'Bladder Cancer',
      
      data: [24, 76],
      backgroundColor: [
        '#36a2eb',
        '#ff6384'
      ],
      borderColor: [
        '#ECF0F1',
        '#ECF0F1'
      ],
      borderWidth: 0
    }
  ];
  @ViewChild('mySlider') slider: Slides;

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
    this.navCtrl.push(BladderAboutPage);
  }

  expandFirstTreatment()
  {
    this.navCtrl.push(BladderPhotodynamicPage)
  }

  expandSecondTreatment()
  {
    this.navCtrl.push(BladderIntravesicalPage);
  }

  expandFirstDisease()
  {
    this.navCtrl.push(BladderTransitionalPage);
  }

  expandSecondDisease()
  {
    this.navCtrl.push(BladderSquamousPage);
  }

  expandFirstDonation()
  {
    this.navCtrl.push(DonateBladderOnePage)
  }

  expandSecondDonation()
  {
    this.navCtrl.push(DonateBladderTwoPage);
  }


   mySlideOptions = {
    direction: "vertical",
    pager:"true"
  };

    constructor(public navCtrl: NavController, public navParams: NavParams) {}

    ionViewDidLoad() {
      console.log('ionViewDidLoad BladderPage');
    }

}


