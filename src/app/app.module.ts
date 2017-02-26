import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Editor } from '../pages/editor/editor';
import { ScriptKeyboardTestPage } from '../pages/script-keyboard-test-page/script-keyboard-test-page';
import { ScriptKeyboardController } from '../components/script-keyboard/script-keyboard';
import { ScriptKeyboardCmp } from '../components/script-keyboard/script-keyboard-component';
import { ScriptVisualizerCmp } from '../components/script-visualizer/script-visualizer-component';

@NgModule({
  declarations: [
    MyApp,
    Editor,
    ScriptKeyboardTestPage,
    ScriptKeyboardCmp,
    ScriptVisualizerCmp
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Editor,
    ScriptKeyboardTestPage,
    ScriptKeyboardCmp,
    ScriptVisualizerCmp
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ScriptKeyboardController]
})
export class AppModule {}
