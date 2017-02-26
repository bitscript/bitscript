import { Component, ElementRef, HostListener, Renderer, ViewEncapsulation } from '@angular/core';

import { BlockerDelegate, GestureController, BLOCK_ALL } from 'ionic-angular/gestures/gesture-controller';
import { Config } from 'ionic-angular/config/config';
import { Key } from 'ionic-angular/platform/key';
import { Platform } from 'ionic-angular/platform/platform';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { NavOptions } from 'ionic-angular/navigation/nav-util';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@Component({
  selector: 'script-keyboard',
  templateUrl: 'script-keyboard-component.html',
  encapsulation: ViewEncapsulation.None
})
export class ScriptKeyboardCmp {
  d: {
    title?: string;
    subTitle?: string;
    cssClass?: string;
    buttons?: Array<any>;
    enableBackdropDismiss?: boolean;
    cancelButton: any;
  };
  descId: string;
  enabled: boolean;
  hdrId: string;
  id: number;
  mode: string;
  gestureBlocker: BlockerDelegate;
  handleKeyPress: any;

  constructor(
    private _viewCtrl: ViewController,
    config: Config,
    private _plt: Platform,
    private _elementRef: ElementRef,
    gestureCtrl: GestureController,
    params: NavParams,
    renderer: Renderer
  ) {
    this.gestureBlocker = gestureCtrl.createBlocker(BLOCK_ALL);
    this.d = params.data;
    this.mode = config.get('mode');
    renderer.setElementClass(_elementRef.nativeElement, `action-sheet-${this.mode}`, true);

    if (this.d.cssClass) {
      this.d.cssClass.split(' ').forEach(cssClass => {
        // Make sure the class isn't whitespace, otherwise it throws exceptions
        if (cssClass.trim() !== '') renderer.setElementClass(_elementRef.nativeElement, cssClass, true);
      });
    }

    this.id = (++actionSheetIds);
    if (this.d.title) {
      this.hdrId = 'acst-hdr-' + this.id;
    }
    if (this.d.subTitle) {
      this.descId = 'acst-subhdr-' + this.id;
    }

    this.handleKeyPress = params.data.handleKeyPress;
  }

  onButtonClick(opcode) {
    if(this.handleKeyPress) {
      this.handleKeyPress(opcode);
    }
  }

  ionViewDidLoad() {
    // normalize the data
    let buttons: any[] = [];

    this.d.buttons = buttons;

    this.d.buttons.forEach((button: any) => {
      if (typeof button === 'string') {
        button = { text: button };
      }
      if (!button.cssClass) {
        button.cssClass = '';
      }

      if (button.role === 'cancel') {
        this.d.cancelButton = button;

      } else {
        if (button.role === 'destructive') {
          button.cssClass = (button.cssClass + ' ' || '') + 'action-sheet-destructive';
        } else if (button.role === 'selected') {
          button.cssClass = (button.cssClass + ' ' || '') + 'action-sheet-selected';
        }
        buttons.push(button);
      }
    });
  }

  ionViewWillEnter() {
    this.gestureBlocker.block();
  }

  ionViewDidLeave() {
    this.gestureBlocker.unblock();
  }

  ionViewDidEnter() {
    this._plt.focusOutActiveElement();

    let focusableEle = this._elementRef.nativeElement.querySelector('button');
    if (focusableEle) {
      focusableEle.focus();
    }
    this.enabled = true;
  }

  @HostListener('body:keyup', ['$event'])
  keyUp(ev: KeyboardEvent) {
    if (this.enabled && this._viewCtrl.isLast()) {
      if (ev.keyCode === Key.ESCAPE) {
        console.debug('actionsheet, escape button');
        this.bdClick();
      }
    }
  }

  click(button: any) {
    if (! this.enabled ) {
      return;
    }

    let shouldDismiss = true;

    if (button.handler) {
      if (button.handler() === false) {
        shouldDismiss = false;
      }
    }

    if (shouldDismiss) {
      this.dismiss(button.role);
    }
  }

  click2(opcode) {
    this.handleKeyPress(opcode)
  }

  bdClick() {
    if (this.enabled && this.d.enableBackdropDismiss) {
      if (this.d.cancelButton) {
        this.click(this.d.cancelButton);

      } else {
        this.dismiss('backdrop');
      }
    }
  }

  dismiss(role: any): Promise<any> {
    const opts: NavOptions = {
      minClickBlockDuration: 400
    };
    return this._viewCtrl.dismiss(null, role, opts);
  }

  ngOnDestroy() {
    this.gestureBlocker.destroy();
  }
}

let actionSheetIds = -1;
