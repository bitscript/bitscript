import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { ScriptKeyboardTestPage } from '../pages/script-keyboard-test-page/script-keyboard-test-page';
import { ScriptKeyboardController } from '../components/script-keyboard/script-keyboard';
import { ScriptKeyboardCmp } from '../components/script-keyboard/script-keyboard-component';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    ScriptKeyboardTestPage,
    ScriptKeyboardCmp
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    ScriptKeyboardTestPage,
    ScriptKeyboardCmp
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ScriptKeyboardController]
})
export class AppModule {}
