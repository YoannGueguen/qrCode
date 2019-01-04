import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
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
  public tabStorage;
  constructor(private storage: StorageProvider) {
  }

  ionViewDidLoad() {
            this.tabStorage = [];
            this.storage.get('historique').then((data)=>{this.tabStorage =data});

  }

}
