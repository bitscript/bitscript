import { Component, ElementRef, HostListener, Renderer, ViewEncapsulation } from '@angular/core';

import { BlockerDelegate, GestureController, BLOCK_ALL } from 'ionic-angular/gestures/gesture-controller';
import { Config } from 'ionic-angular/config/config';
import { Key } from 'ionic-angular/platform/key';
import { Platform } from 'ionic-angular/platform/platform';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { NavOptions } from 'ionic-angular/navigation/nav-util';
import { ViewController } from 'ionic-angular/navigation/view-controller';

import { ScriptKeyboardController } from '../../components/script-keyboard/script-keyboard';

@Component({
  selector: 'script-visualizer',
  templateUrl: 'script-visualizer-component.html',
  encapsulation: ViewEncapsulation.None
})
export class ScriptVisualizerCmp {
  scriptKeyboard;
  operationList: any;
  constructor(private scriptKeyboardController: ScriptKeyboardController) {
    this.scriptKeyboard = scriptKeyboardController.create(this.handleKeyPress);
    
    this.operationList = [
      {
        operation: 'OP_2',
        stackBefore: [],
        stackAfter: [2]
      },
      {
        operation: 'OP_3',
        stackBefore: [2],
        stackAfter: [2, 3]
      },
      {
        operation: 'OP_ADD',
        stackBefore: [2, 3],
        stackAfter: [5]
      },
    ]
  }
  
  handleKeyPress(opcode) {
    console.log('key pressed', opcode)
  }
}
