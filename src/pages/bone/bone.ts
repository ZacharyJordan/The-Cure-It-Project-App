import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Chart} from 'ng2-chartjs2';
import {BoneAboutPage} from '../bone-about/bone-about';
import {BoneOsteosarcomasPage} from '../bone-osteosarcomas/bone-osteosarcomas';
import {BoneEwingPage} from '../bone-ewing/bone-ewing';
import {BoneChondrosarcomasPage} from '../bone-chondrosarcomas/bone-chondrosarcomas';
import {BoneProtonPage} from '../bone-proton/bone-proton';
import {BoneMyeloablativePage} from '../bone-myeloablative/bone-myeloablative';

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
  

}
