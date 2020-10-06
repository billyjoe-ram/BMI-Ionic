import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  inpPeso: number = null;
  inpAltura: number = null;
  grau: string = null;
  imc: number;

  constructor(public toastController: ToastController) {}  
  
  async showToast() {
    let altura = this.inpAltura;
    let peso = this.inpPeso;
    this.imc  = peso / (altura * altura)
    if (this.imc >= 17) {      
      if (this.imc >= 18) {
        if (this.imc >= 25) {
          if (this.imc >= 30) {
            if (this.imc >= 35) {
              if (this.imc > 40) {
                this.grau = "Obesidade Grau III";                  
              }
              else
                this.grau = "Obesidade Grau II";
            }           
            else
              this.grau = "Obesidade Grau I";              
          }
          else
            this.grau = "Acima do Peso";            
        }
        else
          this.grau = "Peso Normal";          
      }
      else
        this.grau = "Abaixo do Peso";          
    }
    else
      this.grau = "Muito Abaixo do Peso";           

    if (this.imc > 0) {
      const toast = await this.toastController.create({
        message: "Seu IMC é de " + this.imc.toFixed(2) + "kg/m². " + this.grau,
        duration: 2000
      });
      console.log(this.imc) 
      toast.present();  
    } 
    else {
      const toast = await this.toastController.create({
        message:"Por favor, preencha os campos corretamente",
        duration: 5000
      });   
      console.log(this.imc) 
      toast.present();   
    }
  }
}
