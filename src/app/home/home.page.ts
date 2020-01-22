import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  modal: HTMLIonModalElement;

  constructor(public modalController: ModalController) {
    this.createModal();
  }

  async createModal() {
    
  }

  async presentModal() {
    this.modal = await this.modalController.create({
      component: ModalPage
    });
    this.modal.onDidDismiss().then((res) => {
      console.debug("Res", res);
    });
    return this.modal.present();
  }
}
