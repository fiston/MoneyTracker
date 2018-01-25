import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CurrencyPipe } from '@angular/common';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AuthProvider } from '../providers/auth/auth';
import { HomePage } from '../pages/home/home';

// Importing AF2 Module

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from "angularfire2/database-deprecated";
import { DatabaseserviceProvider } from '../providers/databaseservice/databaseservice';

// AF2 Settings
const firebaseConfig = {
  apiKey: "AIzaSyDLtsGmginQD_2KEMQFl9bc0F9mAneE-Vw",
  authDomain: "money-tracker-26255.firebaseapp.com",
  databaseURL: "https://money-tracker-26255.firebaseio.com",
  projectId: "money-tracker-26255",
  storageBucket: "",
  messagingSenderId: "955200042751"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SplashScreen,
    StatusBar, 
    AuthProvider,
    DatabaseserviceProvider,
    CurrencyPipe
  ]
})
export class AppModule {}