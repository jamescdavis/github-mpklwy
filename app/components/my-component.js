import Component from '@glimmer/component';
import { tracked, cached } from '@glimmer/tracking';
import { action } from '@ember/object';
import { task } from 'ember-concurrency';
import { next } from '@ember/runloop';

export default class extends Component {
  @tracked isOpen = true;

  @tracked runCount = 0;

  @cached
  get something() {
    return this.doSomething.perform(this.args.foo);
  }

  @task
  doSomething = function* (foo) {
    next(() => this.runCount++);
    return foo;
  };

  @action
  toggleIsOpen() {
    this.isOpen = !this.isOpen;
  }
}
