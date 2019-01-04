import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {StorageProvider} from "../../providers/storage/storage";

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  public tabStorage = [];
  private tabLength: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: StorageProvider) {
  }

  ionViewDidLoad() {
    this.storage.length().then((data=>{this.tabLength = data}));
    console.log(this.tabLength);
    for(let i=0; i <= this.tabLength;i++)
    {
      this.tabStorage.push(this.storage.get(i));
    }
  }

}
