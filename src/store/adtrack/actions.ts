import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { AdtrackStateInterface } from './state';

const actions: ActionTree<AdtrackStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
