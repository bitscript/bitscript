import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ScriptKeyboardController } from '../../components/script-keyboard/script-keyboard';

@Component({
  selector: 'page-script-keyboard-test',
  templateUrl: 'script-keyboard-test-page.html'
})
export class ScriptKeyboardTestPage {

  scriptKeyboard;

  constructor(public navCtrl: NavController, public navParams: NavParams, private scriptKeyboardController: ScriptKeyboardController) {

    this.scriptKeyboard = scriptKeyboardController.create(this.handleKeyPress);

  }

  ionViewDidEnter() {
    this.scriptKeyboard.present();
  }

  handleKeyPress(opcode) {
    console.log('key pressed', opcode)
  }

}
