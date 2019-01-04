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
    scannedCode = null;
    constructor(private barcodeScanner: BarcodeScanner) { }

    scanCode() {
        this.barcodeScanner.scan().then(barcodeData => {
            this.scannedCode = barcodeData.text;
        }, (err) => {
            console.log('Error: ', err);
        });
    }
    onFileChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e: any) => {
            console.log(e.target.result);
            this.scannedCode = e.target.result;
        }
    }
}
