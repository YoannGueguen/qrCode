import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the ReadQrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-read-qr',
  templateUrl: 'read-qr.html',
})
export class ReadQrPage {
    qrData = null;
    createdCode = null;
    scannedCode = null;
    constructor(private barcodeScanner: BarcodeScanner) { }

    createCode() {
        this.createdCode = this.qrData;
    }

    scanCode() {
        this.barcodeScanner.scan().then(barcodeData => {
            this.scannedCode = barcodeData.text;
        }, (err) => {
            console.log('Error: ', err);
        });
    }
}
