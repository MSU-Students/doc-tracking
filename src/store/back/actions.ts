import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { BackStateInterface } from './state';

const actions: ActionTree<BackStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
