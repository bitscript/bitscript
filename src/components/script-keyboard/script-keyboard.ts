import { Injectable } from '@angular/core';

import { ScriptKeyboardCmp } from './script-keyboard-component';
import { App } from 'ionic-angular';
import { NavOptions } from 'ionic-angular/navigation/nav-util';
import { ViewController } from 'ionic-angular/navigation/view-controller';

export class ScriptKeyboard extends ViewController {
  private _app: App;

  constructor(app: App) {
    super(ScriptKeyboardCmp, {
      enableBackdropDismiss: true
    }, null);
    this._app = app;
    this.isOverlay = true;
  }

  getTransitionName(direction: string) {
    let key = 'scriptKeyboard' + (direction === 'back' ? 'Leave' : 'Enter');
    return this._nav && this._nav.config.get(key);
  }

  present(navOptions: NavOptions = {}) {
    navOptions.minClickBlockDuration = navOptions.minClickBlockDuration || 400;
    return this._app.present(this, navOptions);
  }

}

@Injectable()
export class ScriptKeyboardController {

  constructor(private _app: App) {}

  create(): ScriptKeyboard {
    return new ScriptKeyboard(this._app);
  }

}
