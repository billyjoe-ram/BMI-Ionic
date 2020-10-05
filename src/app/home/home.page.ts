import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public toastController: ToastController) {}
  
  async showToast() {
    var altura = parseFloat((<HTMLInputElement>document.querySelector("np-altura")).value);
    var peso = parseFloat((<HTMLInputElement>document.querySelector("inp-peso")).value);
    var imc = peso / (altura * altura);

    const toast = await this.toastController.create({
      message: "Seu IMC é de" + imc + "kg/m²",
      duration: 2000
    });
    toast.present();
  }  

}
