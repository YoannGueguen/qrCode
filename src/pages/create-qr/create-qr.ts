import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  public dateNow:Date = new Date();
  public tab = [];
  public keyvalue;

  constructor(public navCtrl: NavController, public navParams: NavParams, public qrCodeProvider: QrCodeProvider, private storage: StorageProvider) {
      this.storage.clear();
  }
    generateQr(){
        this.qrCodeProvider.generateQRCode(this.text).then
        ((data=>
        {this.qrImg=data;
        }));
        this.tab.push([this.text, this.dateNow]);
        this.storage.length().then((data)=>{this.keyvalue = data});
        this.storage.set(this.keyvalue,this.tab);
        console.log(this.keyvalue);
        for(let i=0; i <= this.keyvalue;i++)
        {
            console.log(this.storage.get(i));
        }

    }
}
