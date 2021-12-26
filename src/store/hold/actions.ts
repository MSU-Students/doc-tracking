import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { HoldStateInterface } from './state';

const actions: ActionTree<HoldStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
