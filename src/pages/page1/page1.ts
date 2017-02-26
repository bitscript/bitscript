import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { execute, OpCode } from '../../bitcoin-script'

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {
    const a = execute({
      blockHeight: 0,
      blockTime: 0,
      serializedScript: new Uint8Array([OpCode.OP_2, OpCode.OP_3, OpCode.OP_ADD]),
      nLockTime: 0,
      nSequence: 0,
      stack: [],
      altStack: [],
      programCounter: 0
    });
    console.log(a.next());
    console.log(a.next());
    console.log(a.next());
  }

}
