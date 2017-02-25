import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { OpCode } from '../../bitcoin-script/language-definition';
import { execute, Operation, Script } from '../../engine/engine'

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {

    let operations = new Script();

    operations.push(Operation.create(OpCode.OP_1));
    operations.push(Operation.create(OpCode.OP_2));
    operations.push(Operation.create(OpCode.OP_ADD));

    let a = execute(operations);
    console.log(a.next());
    console.log(a.next());
    console.log(a.next());
  }

}
