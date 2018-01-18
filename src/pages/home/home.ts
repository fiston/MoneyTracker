import { CurrencyPipe } from '@angular/common';
import { Account } from './../../models/account.interface';
import { FirebaseListObservable, AngularFireDatabase} from 'angularfire2/database-deprecated';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  accounts: FirebaseListObservable<Account[]>;

  constructor(public navCtrl: NavController, afDatabase: AngularFireDatabase) {
    this.accounts = afDatabase.list('/Accounts');
  }

  addAccount(){
    this.navCtrl.push('AddAccountPage');
  }

}
