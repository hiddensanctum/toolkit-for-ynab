import { Feature } from 'toolkit/extension/features/feature';

export class BetterScrollbars extends Feature {
  injectCSS() {
    if (this.settings.enabled === '1') {
      return require('./thin.css');
    }
    if (this.settings.enabled === '2') {
      return require('./off.css');
    }
  }
}
