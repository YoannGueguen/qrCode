import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {QrCodeProvider} from "../../providers/qr-code/qr-code";
import {StorageProvider} from "../../providers/storage/storage";

/**
 * Generated class for the CreateQrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-qr',
  templateUrl: 'create-qr.html',
})
export class CreateQrPage {

  public qrImg:string;
  public text:any;
  public tab = {};
  public history = [];

  constructor(public qrCodeProvider: QrCodeProvider, private storage: StorageProvider) {

  }
    generateQr(){
        this.qrCodeProvider.generateQRCode(this.text).then
        ((data=>
        {this.qrImg=data;
        }));
        this.tab = {
            'date' : new Date(),
            'text' : this.text
        };

        this.history.push(this.tab);
        this.storage.set('historique',this.history);
    }
}
