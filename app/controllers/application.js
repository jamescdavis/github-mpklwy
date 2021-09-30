import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  appName = 'Ember Twiddle';

  @tracked foo = 'foo';

  @action
  updateFoo() {
    this.foo = "bar";
  }
}