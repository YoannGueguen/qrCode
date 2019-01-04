import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {QrCodeProvider} from "../../providers/qr-code/qr-code";

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
public text:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public qrCodeProvider: QrCodeProvider) {
  }
    generateQr(){
        this.qrCodeProvider.generateQRCode(this.text);
    }
}
