import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { OutgoingStateInterface } from './state';

const actions: ActionTree<OutgoingStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
