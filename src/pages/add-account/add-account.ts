import { Account } from './../../models/account.interface';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase/app';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-account',
  templateUrl: 'add-account.html',
})
export class AddAccountPage {

  account = {} as Account

  constructor(public navCtrl: NavController, afDatabase: AngularFireDatabase) { }

  addAccount(account: Account) : void {
    const accountRef:  firebase.database.Reference = firebase.database().ref('/Accounts/');
    accountRef.push({
      accountName: this.account.accountName,
      accountBalance: this.account.accountBalance
    });

    this.navCtrl.pop();
  }

}
