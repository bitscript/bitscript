import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { execute, OP_CODES, Operation } from '../../engine/engine'

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {

    let operations = [];

    operations.push(Operation.create(OP_CODES.OP_1));
    operations.push(Operation.create(OP_CODES.OP_2));
    operations.push(Operation.create(OP_CODES.OP_ADD));

    let a = execute(operations);
    console.log(a.next());
    console.log(a.next());
    console.log(a.next());
  }

}
