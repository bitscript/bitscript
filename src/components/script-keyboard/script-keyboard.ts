import { Injectable } from '@angular/core';

import { ScriptKeyboardCmp } from './script-keyboard-component';
import { App } from 'ionic-angular';
import { NavOptions } from 'ionic-angular/navigation/nav-util';
import { ViewController } from 'ionic-angular/navigation/view-controller';

export class ScriptKeyboard extends ViewController {
  private _app: App;

  constructor(app: App) {
    super(ScriptKeyboardCmp, {}, null);
    this._app = app;
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
