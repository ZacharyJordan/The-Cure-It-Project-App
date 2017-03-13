import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ThyroidAboutPage} from '../thyroid-about/thyroid-about';
import {ThyroidFollicularPage} from '../thyroid-follicular/thyroid-follicular';
import {ThyroidHurthlePage} from '../thyroid-hurthle/thyroid-hurthle';
import {ThyroidPapillaryPage} from '../thyroid-papillary/thyroid-papillary';
import {ThyroidRadioactivePage} from '../thyroid-radioactive/thyroid-radioactive';
import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';
import {Chart} from 'ng2-chartjs2';
import {ThyroidThyroidectomyPage} from '../thyroid-thyroidectomy/thyroid-thyroidectomy';
import {DonateThyroidOnePage} from '../donate-thyroid-one/donate-thyroid-one';
import {DonateThyroidTwoPage} from '../donate-thyroid-two/donate-thyroid-two';


/*
  Generated class for the Breast page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-thyroid',
  templateUrl: 'thyroid.html'
})
export class ThyroidPage {

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
    this.navCtrl.push(ThyroidAboutPage);
  }

  expandFirstDisease()
  {
    this.navCtrl.push(ThyroidPapillaryPage);
  }

  expandSecondDisease()
  {
    this.navCtrl.push(ThyroidFollicularPage);
  }

  expandThirdDisease()
  {
    this.navCtrl.push(ThyroidHurthlePage);
  }

  expandFirstTreatment()
  {
    this.navCtrl.push(ThyroidRadioactivePage);
  }
  
  expandSecondTreatment()
  {
    this.navCtrl.push(ThyroidThyroidectomyPage)
  }

  expandFirstDonation()
  {
    this.navCtrl.push(DonateThyroidOnePage);
  }

  expandSecondDonation()
  {
    this.navCtrl.push(DonateThyroidTwoPage);
  }

  
}
