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

  start = ['Hola, soy x-bot, estoy para ayudarte.', 
          '¿En qué puedo ayudarte?',
          '1. Consumo a la fecha',
          '2. Adquisición de productos',
          '3. Promociones'];

  consumo = ['500M restantes de su plan de datos', 
             '88 minutos de su plan de voz', 
             'Adquirir nuevos productos',
             'Hacer otra pregunta'];

  productos = ['Combos', 
             'Solo datos', 
             'Solo voz',
             'Hacer otra pregunta'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    this.bot1 = this.start;
  }

  test(ask:string){
    switch (ask){
      case '1. Consumo a la fecha': this.bot1 = this.consumo; break;
      case '2. Adquisición de productos': this.bot1 = this.productos; break;
      case 'Hacer otra pregunta': this.bot1 = this.start; break;
      default : this.bot1 = this.start; break;
    }

  }
}
