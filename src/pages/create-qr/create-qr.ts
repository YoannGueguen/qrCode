import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {QrCodeProvider} from "../../providers/qr-code/qr-code";
import {StorageProvider} from "../../providers/storage/storage";
import {SocialSharing} from "@ionic-native/social-sharing";

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

  constructor(public qrCodeProvider: QrCodeProvider, private storage: StorageProvider, private socialSharing: SocialSharing) {

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
    share() {
        this.socialSharing.share('Partage du Qr code', null, this.qrImg, null)
            .then(() => {

            }).catch(() => {

        })
    }
}
