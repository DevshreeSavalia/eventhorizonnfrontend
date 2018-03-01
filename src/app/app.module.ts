import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CommNamePage } from '../pages/comm-name/comm-name';
import { UpcomingevtPage } from '../pages/upcomingevt/upcomingevt';
import { PastevtPage } from '../pages/pastevt/pastevt';
import { MemberPage} from '../pages/member/member';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginProvider } from '../providers/login/login';
import { UpcommSegDataProvider } from '../providers/upcomm-page-data/upcomm-page-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    CommNamePage,
    UpcomingevtPage,
    PastevtPage,
    MemberPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    CommNamePage,
    UpcomingevtPage,
    PastevtPage,
    MemberPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    UpcommSegDataProvider
  ]
})
export class AppModule {}
