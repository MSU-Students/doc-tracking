import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { IncomingStateInterface } from './state';

const actions: ActionTree<IncomingStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
