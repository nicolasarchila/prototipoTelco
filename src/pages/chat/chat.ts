import { CreatorPage } from './../creator/creator';
import { ContactPage } from './../contact/contact';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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

  message = '';

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
    '¿Buscas algo más?',
    'Hacer otra pregunta.'];

  combos = ['300 minutos + 10G de datos + telefonía ilimitada.',
    '200 minutos + 5G de datos + telefonía ilimitada.',
    '100 minutos + 2G de datos + telefonía ilimitada.',
    'Hacer otra pregunta.'];

  datos = ['Plan 10G de datos + redes sociales ilimitada.',
    'Plan 5G de datos + redes sociales ilimitada.',
    'Plan 2G de datos + chat de whatsapp.',
    'Hacer otra pregunta.'];

  voz = ['Plan 300 minutos.',
    'Plan 200 minutos.',
    'Plan 100 minutos.',
    'Hacer otra pregunta.'];

  soporte = ['Problemas con su plan de datos',
    'Problemas con su línea fija.',
    'Problemas con su red wifi.',
    'Hacer otra pregunta.'];

  personalizado = ['Debido a tu buen comportamiento tienes acceso a un paquete especial de redes sociales',
    'Hacer otra pregunta.'];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) { }

  showNotificacion(title:string, msg:string) {
    const confirm = this.alertCtrl.create({
      title: title,
      message: msg,
      buttons: [
        {
          text: 'Gracias',
          handler: () => {
            this.bot1 = this.start;
          }
        }
      ]
    });
    confirm.present();
  }

  showConfirm(msg:string) {
    const confirm = this.alertCtrl.create({
      title: '¿Este es su producto?',
      message: msg,
      buttons: [
        {
          text: 'No, este no',
          handler: () => {
          }
        },
        {
          text: 'Si, este es',
          handler: () => {
            this.showNotificacion('Felicitaciones','Su producto ha sido cargado en su cuenta.');
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    this.bot1 = this.start;
  }

  checkBot(ask: string) {
    switch (ask) {
      case 'Consumo a la fecha.': this.bot1 = this.consumo; break;
      case 'Adquisición de productos.': this.bot1 = this.productos; break;
      case 'Adquirir nuevos productos.': this.bot1 = this.productos; break;
      case 'Solo para ti.': this.bot1 = this.personalizado; break;
      case 'Adquirir Combos.': this.bot1 = this.combos; break;
      case 'Planes solo datos.': this.bot1 = this.datos; break;
      case 'Planes solo voz.': this.bot1 = this.voz; break;
      case 'Soporte técnico.': this.bot1 = this.soporte; break;
      case 'Hacer otra pregunta.': this.bot1 = this.start; break;
      case 'Plan 10G de datos + redes sociales ilimitada.': this.showConfirm('Plan 10G de datos + redes sociales ilimitada.'); break;
      case 'Plan 5G de datos + redes sociales ilimitada.': this.showConfirm('Plan 5G de datos + redes sociales ilimitada.'); break;
      case 'Plan 2G de datos + chat de whatsapp.': this.showConfirm('Plan 2G de datos + chat de whatsapp.'); break;
      case 'Plan 300 minutos.': this.showConfirm('Plan 300 minutos.'); break;
      case 'Plan 200 minutos.': this.showConfirm('Plan 200 minutos.'); break;
      case 'Plan 100 minutos.': this.showConfirm('Plan 100 minutos.'); break;
      case '300 minutos + 10G de datos + telefonía ilimitada.': this.showConfirm('300 minutos + 10G de datos + telefonía ilimitada.'); break;
      case '200 minutos + 5G de datos + telefonía ilimitada.': this.showConfirm('200 minutos + 5G de datos + telefonía ilimitada.'); break;
      case '100 minutos + 2G de datos + telefonía ilimitada.': this.showConfirm('100 minutos + 2G de datos + telefonía ilimitada.'); break;
      case 'Problemas con su plan de datos': this.showNotificacion('Lamentamos el incidente', 'Por favor registra tus datos y pronto nos comunicaremos'); this.toContact(); break;
      case 'Problemas con su línea fija.': this.showNotificacion('Lamentamos el incidente', 'Por favor registra tus datos y pronto nos comunicaremos'); this.toContact(); ; break;
      case 'Problemas con su red wifi.': this.showNotificacion('Lamentamos el incidente', 'Por favor registra tus datos y pronto nos comunicaremos'); this.toContact(); ; break;
      case '¿Buscas algo más?': this.navCtrl.push(CreatorPage); break;
      default: break;
    }
  }

  toContact() {
    this.navCtrl.push(ContactPage);
  }

}
