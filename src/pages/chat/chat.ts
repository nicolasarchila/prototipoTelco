import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

  bot1 = [];

  start = ['Consumo a la fecha.',
          'Adquisición de productos.',
          'Solo para ti.',
          'Soporte técnico.'];

  consumo = ['500M restantes de su plan de datos.', 
             '88 minutos de su plan de voz.', 
             'Adquirir nuevos productos.',
             'Hacer otra pregunta.'];

  productos = ['Adquirir Combos.', 
             'Planes solo datos.', 
             'Planes solo voz.',
             'Hacer otra pregunta.'];

  combos = ['300 minutos + 10G de datos + telefonía ilimitada.', 
           '200 minutos + 5G de datos + telefonía ilimitada.', 
           '100 minutos + 2G de datos + telefonía ilimitada.',
           'Hacer otra pregunta.'];

  personalizado = ['Debido a tu buen comportamiento tienes acceso a un paquete especial de redes sociales',
             'Hacer otra pregunta,'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    this.bot1 = this.start;
  }

  checkBot(ask:string){
    switch (ask){
      case 'Consumo a la fecha.': this.bot1 = this.consumo; break;
      case 'Adquisición de productos.': this.bot1 = this.productos; break;
      case 'Adquirir nuevos productos.': this.bot1 = this.productos; break;
      case 'Solo para ti.': this.bot1 = this.personalizado; break;
      case 'Adquirir Combos.': this.bot1 = this.combos; break;

      case 'Hacer otra pregunta.': this.bot1 = this.start; break;
      default : this.bot1 = this.start; break;
    }
  }

}
