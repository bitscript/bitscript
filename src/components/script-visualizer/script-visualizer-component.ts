import { Component, ElementRef, HostListener, Renderer, ViewEncapsulation } from '@angular/core';

import { BlockerDelegate, GestureController, BLOCK_ALL } from 'ionic-angular/gestures/gesture-controller';
import { Config } from 'ionic-angular/config/config';
import { Key } from 'ionic-angular/platform/key';
import { Platform } from 'ionic-angular/platform/platform';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { NavOptions } from 'ionic-angular/navigation/nav-util';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@Component({
  selector: 'script-visualizer',
  templateUrl: 'script-visualizer-component.html',
  encapsulation: ViewEncapsulation.None
})
export class ScriptVisualizerCmp {

  constructor() {
  }
}
