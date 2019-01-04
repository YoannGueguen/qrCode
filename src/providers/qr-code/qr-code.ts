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

  generateQRCode(text: string): Promise<string>{
      return QRCode.toDataURL(text);
  }


}
