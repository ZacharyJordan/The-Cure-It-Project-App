import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {BladderPage} from '../pages/bladder/bladder';
import {AccountCreationPage} from '../pages/account-creation/account-creation';
import {BladderAboutPage} from '../pages/bladder-about/bladder-about';
import {ChartModule} from 'ng2-chartjs2';
import {BladderPhotodynamicPage} from '../pages/bladder-photodynamic/bladder-photodynamic';
import {BladderIntravesicalPage} from '../pages/bladder-intravesical/bladder-intravesical';
import {BladderTransitionalPage} from '../pages/bladder-transitional/bladder-transitional';
import {BladderSquamousPage} from '../pages/bladder-squamous/bladder-squamous';
import {BloodPage} from '../pages/blood/blood';
import {BloodLeukemiaPage} from '../pages/blood-leukemia/blood-leukemia';
import {BloodMyelomaPage} from '../pages/blood-myeloma/blood-myeloma';
import {BloodLymphomaPage} from '../pages/blood-lymphoma/blood-lymphoma';
import {BloodCellPage} from '../pages/blood-cell/blood-cell';
import {BloodChemotherapyPage} from '../pages/blood-chemotherapy/blood-chemotherapy';
import {BonePage} from '../pages/bone/bone';
import {BloodAboutPage} from '../pages/blood-about/blood-about';
import {BoneAboutPage} from '../pages/bone-about/bone-about';
import {BoneOsteosarcomasPage} from '../pages/bone-osteosarcomas/bone-osteosarcomas';
import {BoneEwingPage} from '../pages/bone-ewing/bone-ewing';
import {BoneChondrosarcomasPage} from '../pages/bone-chondrosarcomas/bone-chondrosarcomas';
import {BoneProtonPage} from '../pages/bone-proton/bone-proton';
import {BoneMyeloablativePage} from '../pages/bone-myeloablative/bone-myeloablative';
import {BrainPage} from '../pages/brain/brain';
import {BrainAboutPage} from '../pages/brain-about/brain-about';
import {BrainPrimaryPage} from '../pages/brain-primary/brain-primary';
import {BrainMeningiomasPage} from '../pages/brain-meningiomas/brain-meningiomas';
import {BrainGlioblastomasPage} from '../pages/brain-glioblastomas/brain-glioblastomas';
import {BrainVirusesPage} from '../pages/brain-viruses/brain-viruses';
import {BrainLasersPage} from '../pages/brain-lasers/brain-lasers';
import {BreastPage} from '../pages/breast/breast';
import {BreastAboutPage} from '../pages/breast-about/breast-about';
import {BreastInvasivePage} from '../pages/breast-invasive/breast-invasive';
import {BreastRecurrentPage} from '../pages/breast-recurrent/breast-recurrent';
import {BreastMetastaticPage} from '../pages/breast-metastatic/breast-metastatic';
import {BreastProteinPage} from '../pages/breast-protein/breast-protein';
import {BreastLifestylePage} from '../pages/breast-lifestyle/breast-lifestyle';
import {InformationPage} from '../pages/information/information';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BladderPage,
    AccountCreationPage,
    BladderPhotodynamicPage,
    BladderIntravesicalPage,
    BladderTransitionalPage,
    BladderSquamousPage,
    BladderAboutPage,
    BloodPage,
    BloodLeukemiaPage,
    BloodMyelomaPage,
    BloodLymphomaPage,
    BloodCellPage,
    BloodChemotherapyPage,
    BonePage,
    BloodAboutPage,
    BoneAboutPage,
    BoneOsteosarcomasPage,
    BoneEwingPage,
    BoneChondrosarcomasPage,
    BoneProtonPage,
    BoneMyeloablativePage,
    BrainPage,
    BrainAboutPage,
    BrainPrimaryPage,
    BrainMeningiomasPage,
    BrainGlioblastomasPage,
    BrainLasersPage,
    BrainVirusesPage,
    BreastPage,
    BreastAboutPage,
    BreastInvasivePage,
    BreastRecurrentPage,
    BreastMetastaticPage,
    BreastProteinPage,
    BreastLifestylePage,
    InformationPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ChartModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BladderPage,
    AccountCreationPage,
    BladderPhotodynamicPage,
    BladderIntravesicalPage,
    BladderTransitionalPage,
    BladderSquamousPage,
    BladderAboutPage,
    BloodPage,
    BloodLeukemiaPage,
    BloodMyelomaPage,
    BloodLymphomaPage,
    BloodCellPage,
    BloodChemotherapyPage,
    BonePage,
    BloodAboutPage,
    BoneAboutPage,
    BoneOsteosarcomasPage,
    BoneEwingPage,
    BoneChondrosarcomasPage,
    BoneProtonPage,
    BoneMyeloablativePage,
    BrainPage,
    BrainAboutPage,
    BrainPrimaryPage,
    BrainMeningiomasPage,
    BrainGlioblastomasPage,
    BrainLasersPage,
    BrainVirusesPage,
    BreastPage,
    BreastAboutPage,
    BreastInvasivePage,
    BreastRecurrentPage,
    BreastMetastaticPage,
    BreastProteinPage,
    BreastLifestylePage,
    InformationPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
