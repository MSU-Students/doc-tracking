import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ReceiveStateInterface } from './state';

const actions: ActionTree<ReceiveStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
