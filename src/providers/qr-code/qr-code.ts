import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import QRCode from 'qrcode';

/*
  Generated class for the QrCodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QrCodeProvider {

  constructor(public http: HttpClient) {
    console.log('Hello QrCodeProvider Provider');
  }

  generateQRCode(text: string): Promise<string> {
      QRCode.toCanvas(document.getElementById('canvas'), text, function (error) {
          if (error) console.error(error)
          console.log('success!');
      });
    return Promise.resolve('');
  }

}
