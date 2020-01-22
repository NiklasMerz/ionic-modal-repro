

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'modal-page',
  templateUrl: 'modal.html'
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) {

  }

  ngOnInit() {
    console.debug('Modal init');
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
}

