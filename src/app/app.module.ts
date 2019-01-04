import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QrCodeProvider } from '../providers/qr-code/qr-code';
import { HttpClientModule } from '@angular/common/http';
import {CreateQrPage} from "../pages/create-qr/create-qr";
import {ReadQrPage} from "../pages/read-qr/read-qr";
import {HistoryPage} from "../pages/history/history";

@NgModule({
  declarations: [
    MyApp,
    CreateQrPage,
      ReadQrPage,
      HistoryPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
      IonicStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
      CreateQrPage,
      ReadQrPage,
      HistoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QrCodeProvider
  ]
})
export class AppModule {}
